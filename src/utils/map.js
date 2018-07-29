let hashEstoChinese={
    etype:[{
        key:"maliciouscode",
        value:"恶意代码"
    },{
        key:"c2",
        value:"C&C"
    },{
        key:"net-intrusion",
        value:"网络入侵"
    },{
        key:"unfix",
        value:"未修复漏洞"
    },{
        key:"illegal_access",
        value:"违规接入"
    },{
        key:"illegal_outer_access",
        value:"违规外联"
    },{
        key:"record",
        value:"其他"
    },{
        key:"<default>",
        value:"其他"
    }],
    pid:[{
        key:"UPDATE",
        value:"人工上传"
    },{
        key:"<default>",
        value:"设备上传"
    }]
}

const changeChinese =(key,value)=>{
    if(key in hashEstoChinese){
        for(let i =0;i<hashEstoChinese[key].length;i++)
        {
            if(i == hashEstoChinese[key].length -1){
                value = hashEstoChinese[key][i].value
                break;
            }
            if(hashEstoChinese[key][i].key == value){
                value = hashEstoChinese[key][i].value
                break;
            }
        }
    }
    return value
}

export const changeShow = (key,value)=>{
    if( Object.prototype.toString.call(value) === '[object Array]'){
        let ans = [];
        for(let i=0;i<value.length;i++){
            ans.push(changeChinese(key,value[i]))
        }
        return ans;
    }
    else if(typeof(value) == "string"){

        return changeChinese(key,value)
    }
}