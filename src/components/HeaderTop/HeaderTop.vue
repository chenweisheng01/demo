<template>
    <header>
        <div id="cityArrow" class="arrow-down"></div>
        <div id="cityText" class="city-text">北京</div>
        <div class="back"></div>
        <div class="title"></div>

        <div class="right">
            <div class="member-center"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        z-index: 100;
        background-color: #e1017e;
        .back{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background: url(./image/back.png) no-repeat 12px 16px / 11px 18px ;//background-size是最后的
        }
        .title{
           position: relative;
        //    top: 15px;
           left: 113px;
           width: 150px;
           height: 20px;
           background: url(./image/title_main.png) no-repeat center center ; 
           background-size: auto 20px;
        }
        .right{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 60px;
            height: 50px;
            .member-center{
                position: absolute;
                top: 13px;
                right: 12px;
                width: 24px;
                height: 24px;
                background: url(./image/membercenter.png) no-repeat center center/ auto 24px;
            }
        }
    }
</style>