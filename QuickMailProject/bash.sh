#!/bin/bash 
function emailP() {
    #arg1 is from who
    arg1=$1
    #arg2 is subject
    arg2=$2
    #arg3 is to whom
    arg3=$3
    #arg4 is the password for gmail account
    arg4=$4
    #arg5 is the message body
    arg5=$5

     sendemail -l email.log     \
    -f "${arg1}"   \
    -u "${arg2}"     \
    -t "${arg3}" \
    -s "smtp.gmail.com:587"  \
    -o tls=yes \
    -xu "${arg1}" \
    -xp "${arg4}" \
    -m "${arg5}"
}














 
