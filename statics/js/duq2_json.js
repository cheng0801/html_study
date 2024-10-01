function myFunction(){
     var a =  {
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
//     function traverseObject(obj) {
//         Object.keys(obj).forEach(key => {
//             var value = obj[key];
//             if (typeof value === 'object') {
//                 traverseObject(value); // 如果值是对象，递归遍历
//                 } else {
//                     console.log(`${key}: ${value}`); // 否则，打印键和值
//                     }
//       });
//     }
// traverseObject(a);
// 这段代码定义了一个名为traverseObject的函数，它接受一个对象作为参数，
// 并使用Object.keys()方法获取所有键名。然后它使用forEach遍历所有键，
// 对于每个键，如果它的值是一个对象，则递归调用traverseObject函数。如果不是，
// 它会打印出键和值。这样就可以遍历嵌套对象中的所有键值对。 
   
       
    Object.keys(a).forEach(function(key){ 
        // alert("11111111");
        var value = key + " : " + a[key] + "<br>";
        // 在这里可以对value进行处理
        document.getElementById("demo5").innerHTML += value;
            if (typeof a[key] === "object"){
                // alert("2222222");
                    // alert(typeof a[key]);
                Object.keys(a[key]).forEach(function(key1){ 
                    // alert("333333")
                    var b = key1 + " : " + a[key][key1] + "<br>";
                    document.getElementById("demo5").innerHTML += b;
                        if (typeof a[key][key1] === "object"){
                            // alert("444444444");
                                // alert(a[key][key1]);
                                    // alert("6666666666");
                                Object.keys(a[key][key1]).forEach(function(key2){ 
                                        // alert("7777777");
                                    var c = key2 + " : " + a[key][key1][key2] + "<br>";
                                    document.getElementById("demo5").innerHTML += c;
                                        if (typeof a[key][key1][key2] === "object"){
                                            // alert("9999999")
                                            Object.keys(a[key][key1][key2]).forEach(function(key3){ 
                                                // alert("8888888");
                                            var d = key3 + " : " + a[key][key1][key2][key3] + "<br>";
                                            document.getElementById("demo5").innerHTML += d;
                                            })
                                        }

                                })
                            
                        }
                            
                        
                        
                    
                })
            }
    })
}
           
