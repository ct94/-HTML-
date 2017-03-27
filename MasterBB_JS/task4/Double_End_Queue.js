/**
 * Created by Administrator on 2017/3/27.
 */
function deque() {//双端队列
    var items=[];
    //左侧入队
    this.leftEnqueue=function (item) {
        items.unshift(item);
    }

    //左侧出队
    this.leftDequeue=function () {
        items.shift();
    }

    //右侧入队
    this.rightEnqueue=function (item) {
        items.push();
    }

    //右侧出队
    this.rightDequeue=function () {
        items.pop();
    }

    //判断是否空
    this.isEmpty=function () {
        return items.length===0;
    }

    this.size=function () {
        return items.length;
    }

    this.print=function () {
        console.log(items.toString());
    }
}