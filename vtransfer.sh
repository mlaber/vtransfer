#!/bin/bash
#title           :vtransfer.sh
#description     :This script exports data collected by vcontrold (https://github.com/openv/vcontrold) to a webserver for further processing
#author          :Markus Laber (https://github.com/mlaber)
#date            :20220809
#version         :0.7    
#usage           :./vtransfer.sh

###################Settings#######################################################################
html_root="/var/www/html"                       #HTML path of your webserver needs to be writeable by script
json_filename="vcontrold.json"          #Name for the exported json file
update_interval="60"                    #Fetch data and update file every n seconds
vcontrold_hostname="localhost"          #Hostname or IP of the host running vcontrold
vcontrold_port="3002"                   #TCP port of vcontrold usually 3002
vclient="/usr/local/bin/vclient"        #Vclient binary
command_file="/tmp/vcommand"            #Temporary file for vclienct commands


#check if script is already running
scriptname=`basename "$0"`
pgrep $scriptname
# if not found - equals to 1, start it
if [ $? -gt 1 ]; then   
   echo "Script is already running, terminating"
   exit 1
fi

#check if user can write html_root
if [ -w $html_root  ]; then
   echo ""
else
   echo "Cannot write to $html_root, terminating"
   exit 1
fi

#check if connect to vcontrold backend is possible
if ! nc -z $vcontrold_hostname $vcontrold_port; then
    echo "Unable to connect to $vcontrold_hostname:$vcontrold_port"
    exit 1
else
    echo -e "Connected to $vcontrold_hostname:$vcontrold_port" 
    echo "" 
fi

rm $command_file                #Delete commadfile from previous runs


#connect via netcat to vcontrolld and figure out which commands are supported for reading (get) and writing (set)
readcommands=$(echo -e "commands\r\nquit\r\n" | nc $vcontrold_hostname $vcontrold_port | grep -o -P '(?<=get).*(?=:)') #IMPORTANT vcontrold read commandnames have to start with "get" check your vito.xml for compliance
echo -e "In vito.xml configure read only commands:\n"$readcommands
echo -e "\n"

writecommands=$(echo -e "commands\r\nquit\r\n" | nc $vcontrold_hostname $vcontrold_port | grep -o -P '(?<=set).*(?=:)') #IMPORTANT vcontrold write commandnames have to start with set" check your vito.xml for compliance
echo -e "In vito.xml configured writeable commands:\n"$writecommands
echo -e "\n"


for i in $readcommands; do
        vcommand=$(echo -e "get$i")
        echo $vcommand >> $command_file
#       json_output=($vclient -h $vcontrold_hostname -p $vcontrold_port -c $vcommand -j)                        #Generate JSON Output for every command
        done

timestamp=$(date +"%Y%m%d%H%M%S")
sleep 2

echo -e "Calling $vclient and write json output to $html_root/$json_filename (may take some time)"
$vclient -h $vcontrold_hostname -p $vcontrold_port -j -f $command_file | sed --expression 's/.\{2\}/&timestamp":'$timestamp',"/' > /tmp/$json_filename     #Write timestamp at positon 2 of the file in json notation, second '"' sign mainatins a deleted json character

mv /tmp/$json_filename $html_root/$json_filename        #Make the operation more atomic, filling the json file takes some time

echo "JSON result dataset:"
cat $html_root/$json_filename
echo ""

exit 0
