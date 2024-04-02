<template>
    <footer class="content">
        <ul>
            <li>
                <a href="#">
                    <p>叫號進度</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>門診時間</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>醫療團隊</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>診所環境</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>聯絡我們</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>掛號查詢</p>
                </a>
            </li>
        </ul>
        <div class="map">
            <img src="../assets/地圖.png" alt="">
            <div>
                <h3>德美診所</h3>
                <p>
                    地址：234新北市永和區中正路455-1號
                </p>
                <p>
                    電話：02 2927 3001
                </p>
                <p>
                    信箱：dl.dmmm@gmail.com
                </p>
            </div>
        </div>
    </footer>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped lang="scss">
.content {
    background: #5b5b5c;
    max-width: 1920px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1.7% 0;

    ul {
        flex: 1;
        display: flex;
        gap: 0 5%;
        margin-left: 7.8%;

        li {
            a {
                text-decoration: none;
                container-type: inline-size;

                p {
                    color: #fff;
                    font-size: 0.9cqw;
                    font-weight: 600;
                    text-wrap: nowrap;
                }
            }
        }
    }

    .map {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: 0 5%;
        margin-right: 7.8%;
        container-type: inline-size;

        img {
            max-width: 267px;
            width: 33%;
        }

        div {
            color: #fff;

            h3 {
                font-size: 2.4cqw;
                font-weight: 600;
                margin: 8% 0;
            }

            p {
                font-size: 2cqw;
                margin-bottom: 3%;
            }
        }
    }
}
</style>