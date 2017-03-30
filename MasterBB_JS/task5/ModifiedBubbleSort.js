/**
 * Created by Administrator on 2017/3/30.
 */
function sort(index1,index2) {//参数为索引值
    var temp=array[index1];
    array[index1]=array[index2];
    array[index2]=temp;
}
this.ModifiedBubbleSort=function () {
    // var array=new Array();
    var length=array.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-1-i;j++){
            if(parseInt(array[j])>parseInt(array[j+1])){
                sort(j,j+1);
            }
        }
    }
};
