
function myFunction(){
    var data =  {
    "status": 0,
    "msg": "asd",
    "data": {
        "yellow": [],
        "pink": [],
        "blue": [],
        "green": [],
        "lightyellow": [],
        "white": [
            {
            "id": 28,
            "name": "秩序魔兽██微变新开",
            "game_version": "巫妖王之怒",
            "open_time": "2022-12-09 13:55:33",
            "net_line": 0,
            "describe": "急速单刷-人山人海-长久稳定-特色玩法-打金首选",
            "link": "http://www.5520wow.com/",
            "mark": 0,
            "old_mark": 1,
            "start_time": "2022-12-10 18:06:27",
            "end_time": "2022-12-30 14:23:33",
            "total_times": 4,
            "enable": 1,
            "change_time": "2024-09-30 15:00:25",
            "link_name": "微变单刷",
            "ask_me": "59595111",
            "star_order": 0
            }]
        }
};
    for (var key in data){
        if(data.hasOwnProperty(key)){
        var x = key + " ： " + data[key] + "<br>";
        document.getElementById("demo5").innerHTML += x;
        }
            if (key == "data"){
                // alert("1111");
                for (var k in data[key]){
                    if (data[key].hasOwnProperty(k)){
                        // alert("222222");
                    var s = k +" : " + data[key][k] + "<br>";
                    document.getElementById("demo5").innerHTML += s ;
                    }
                    if (k == "white"){
                        // alert("3333333");
                        for (var k1 in data[key][k][0]){
                            // alert("444444")
                            if (data[key][k][0].hasOwnProperty(k1)){
                                // alert("55555555")
                                var q = k1 + " : " + data[key][k][0][k1] + "<br>";
                                document.getElementById("demo5").innerHTML += q ;
                            }
                        }
                    }
                }
            }
    }
}
   