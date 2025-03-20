export const convertRawToString = (labelValue,isSub=false) => {
    const num = Math.abs(Number(labelValue));

    if(num>=1.0e+9){
        return (num/1.0e+9).toFixed(1)+'B';
    }
    if(num>=1.0e+6){
        return (num/1.0e+6).toFixed(1)+'M';
    }
    if(num>=1.0e+3){
        return (num/1.0e+3).toFixed(isSub?2:0   )+'K';
    }
    return num.toString();
}