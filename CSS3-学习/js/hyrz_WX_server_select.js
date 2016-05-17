
if(!HYRZServerSelect)
{
    var HYRZServerSelect={};
}

HYRZServerSelect.create=function(select_array, ext_opt_array, opt_array)
{
    return new MultiSelect.create(select_array, opt_array||HYRZServerSelect.DATA, ext_opt_array||[]);
}

HYRZServerSelect.STD_DATA= 
[

    {t:"1区我爱罗",v:"1", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"2区百火繚乱",v:"2", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"3区雾隐村",v:"3", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"4区断刀斩首",v:"4", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"5区宇智波鼬",v:"5", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"6区宇智波田岛",v:"6", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"7区梦幻音锁",v:"7", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"8区雨隐村",v:"8", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"9区漆黑长矛",v:"9", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"10区八门遁甲",v:"10", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"11区日向日差",v:"11", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"12区黑斑差",v:"12", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"13区桔梗城",v:"13", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"14区风魔手里剑",v:"14", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"15区月之眼",v:"15", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"16区宇智波美琴",v:"16", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"17区黄泉沼",v:"17", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"18区草波海岸",v:"18", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"19区土遁岩宿崩",v:"19", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"20区坚守的忍道",v:"20", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"21区栗霰串丸",v:"21", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"22区铁之国",v:"22", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"23区开门",v:"23", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"24区万蛇罗阵",v:"24", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"25区愰金绳",v:"25", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"26区雷鼠激震",v:"26", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"27区白激之术",v:"27", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"28区宇智波镜",v:"28", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"29区千本",v:"29", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"30区大蛇丸",v:"30", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"31区五行解印",v:"31", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"32区枭落",v:"32", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"33区川之国",v:"33", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"34区和马",v:"34", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"35区凤仙火",v:"35", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"36区虎狩",v:"36", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"37区水刃击",v:"37", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"38区音隐村",v:"38", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"39区山中三天",v:"39", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"40区桃地再不斩",v:"40", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"41区五行封印",v:"41", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"42区影风车",v:"42", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"43区泷隐村",v:"43", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"44区千手佛间",v:"44", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"45区影分身术",v:"45", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"46区八尺鏡",v:"46", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"47区电光狼烟",v:"47", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"48区流砂暴流",v:"48", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"49区鬼之国",v:"49", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"50区旗木卡卡西",v:"50", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"51区杜门",v:"51", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"52区山椒鱼",v:"52", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"53区翠岚烈风",v:"53", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"54区土陆返",v:"54", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"55区宇智波斑",v:"55", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"56区月之国",v:"56", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"57区木龙演舞",v:"57", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"58区胧分身术",v:"58", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"59区双刀流",v:"59", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"60区须佐能乎",v:"60", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"61区一乐拉面",v:"61", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"62区魂吸",v:"62", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"63区刚流豪雨",v:"63", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"64区犬冢花",v:"64", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"65区螺旋丸",v:"65", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"66区地之舞",v:"66", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"67区不知火玄间",v:"67", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"68区隐蓑",v:"68", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"69区双头狼",v:"69", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"70区木叶村",v:"70", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"71区瞬身止水",v:"71", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"72区二千连弹",v:"72", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"73区水龙鞭",v:"73", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"74区水断波",v:"74", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"75区秽土转生",v:"75", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"76区加藤静音",v:"76", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"77区幻术返",v:"77", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"78区风斩",v:"78", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"79区虫邪民具",v:"79", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"80区照美冥",v:"80", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"81区阴遁雷派",v:"81", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"82区夜叉丸",v:"82", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"83区苏生土壤",v:"83", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"84区旋猛风",v:"84", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"85区六道仙人",v:"85", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"1区漩涡鸣人",v:"1", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"2区豪火灭却",v:"2", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"3区沙隐村",v:"3", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"4区长刀缝针",v:"4", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"5区木叶旋风",v:"5", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"6区千手绳树",v:"6", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"7区无炎方阳",v:"7", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"8区汤隐村",v:"8", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"9区血腥三月镰",v:"9", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"10区水门之殇",v:"10", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"11区千手瓦间",v:"11", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"12区斩斩舞",v:"12", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"13区鸦之森",v:"13", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"14区天沼矛",v:"14", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"15区影之痛",v:"15", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"16区漩涡水户",v:"16", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"17区火之寺",v:"17", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"18区枯木之森",v:"18", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"19区铁线花之舞",v:"19", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"20区执着的守护",v:"20", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"21区赤目岩名",v:"21", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"22区空之国",v:"22", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"23区休门",v:"23", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"24区四赤阳阵",v:"24", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"25区琥珀净瓶",v:"25", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"26区雷之宴",v:"26", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"27区土遁追牙术",v:"27", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"28区宇智波富岳",v:"28", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"29区斩首大刀",v:"29", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"30区自来也",v:"30", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"31区四象封印",v:"31", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"32区隼返",v:"32", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"33区田之国",v:"33", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"34区隼落",v:"34", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"35区影子模仿术",v:"35", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"36区魔蛭",v:"36", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"37区水流鞭",v:"37", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"38区茶国山",v:"38", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"39区加藤断",v:"39", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"40区鬼灯水月",v:"40", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"41区加具土命",v:"41", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"42区回炎",v:"42", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"43区成瀑村",v:"43", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"44区油女志微",v:"44", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"45区豪火球术",v:"45", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"46区空之太刀",v:"46", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"47区哀暗冥电",v:"47", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"48区斩空波",v:"48", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"49区山之国",v:"49", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"50区宇智波带土",v:"50", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"51区景门",v:"51", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"52区草薙剑",v:"52", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"53区月光疾风",v:"53", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"54区土龙隐",v:"54", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"55区千手柱间",v:"55", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"56区雪之国",v:"56", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"57区木枪天破",v:"57", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"58区水牢之术",v:"58", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"59区水铁炮",v:"59", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"60区地爆天星",v:"60", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"61区封印之书",v:"61", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"62区镰雾",v:"62", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"63区龙炎放歌",v:"63", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"64区油女取根",v:"64", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"65区写轮眼",v:"65", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"66区空之舞",v:"66", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"67区卯月夕颜",v:"67", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"68区伪暗",v:"68", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"69区磷坏虫",v:"69", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"70区终末之谷",v:"70", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"71区血雾之里",v:"71", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"72区飞天花火",v:"72", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"73区水阵柱",v:"73", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"74区千鸟流",v:"74", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"75区尸鬼封尽",v:"75", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"76区惠比寿",v:"76", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"77区大鲛弹",v:"77", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"78区烈风掌",v:"78", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"79区开土升掘",v:"79", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"80区大野木",v:"80", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"81区鬼芽罗",v:"81", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"82区木叶丸",v:"82", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"83区土流城壁",v:"83", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"84区灰积烧",v:"84", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"85区鬼灯满月",v:"85", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"86区火走",v:"86", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"87区失落之塔",v:"87", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"88区破山击",v:"88", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"89区兰丸",v:"89", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"90区山中井野",v:"90", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"91区蛤蟆临唱",v:"91", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"92区大蛇缚",v:"92", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"93区洛锁",v:"93", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"94区舌战斩",v:"94", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"95区伊邪那美",v:"95", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96区土流大河",v:"96", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"97区明神门",v:"97", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"98区豪空炮",v:"98", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"99区感知水球",v:"99", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"100区长门",v:"100", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"86区爆风",v:"86", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"87区三日月岛",v:"87", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"88区重流暴",v:"88", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"89区梦火",v:"89", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"90区佐井",v:"90", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"101区追牙",v:"101", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"102区土石龙",v:"102", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"103区潜影蛇手",v:"103", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"104区胧分身",v:"104", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"105区奇拉比",v:"105", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"91区八十神空击",v:"91", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"92区黑龙卷",v:"92", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"93区蛇遣",v:"93", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"94区舌战缚",v:"94", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"95区树界降临",v:"95", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"106区如雨露千本",v:"106", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"107区赤沙之蝎",v:"107", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"108区千杀水翔",v:"108", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"109区裂空水击",v:"109", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"110区穆王",v:"110", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96区雨虎自在",v:"96", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"97区五右卫门",v:"97", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"98区孔雀旋风",v:"98", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"99区红地蜘蛛",v:"99", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"100区漩涡玖辛奈",v:"100", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"111区万里土流壁",v:"111", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"112区转寝小春",v:"112", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"113区蛤蟆短刀斩",v:"113", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"114区森之千手",v:"114", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"115区九喇嘛",v:"115", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96区雨虎自在",v:"96", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"97区五右卫门",v:"97", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"98区孔雀旋风",v:"98", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"99区红地蜘蛛",v:"99", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"100区漩涡玖辛奈",v:"100", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"116区奔流破",v:"116", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"117区岩宿崩",v:"117", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"118区蜘蛛缚",v:"118", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"119区土之国",v:"119", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"120区血继淘汰",v:"120", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"101区水袭",v:"101", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"102区豪水腕",v:"102", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"103区龙大业",v:"103", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"104区沙缚柩",v:"104", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"105区豪炎",v:"105", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"121区心转傀儡",v:"121", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"122区千代",v:"122", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"123区雷缚",v:"123", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"124区风沙尘",v:"124", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"125区勘九郎",v:"125", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"126区飓风水涡",v:"126", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"127区忍刀七人众",v:"127", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"128区飞雷阵",v:"128", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"129区怪腕火矢",v:"129", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"130区天照",v:"130", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"106区大炮弹",v:"106", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"107区毒尘",v:"107", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"108区水饴拿原",v:"108", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"109区水上切",v:"109", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"110区传说三忍",v:"110", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}

];

HYRZServerSelect.STD_SYSTEM_DATA=
[

    {t:"苹果(ios)", v:"0", k:"ios"}
,
    {t:"安卓(android)", v:"1", k:"android"}

];

HYRZServerSelect.STD_CHANNEL_DATA=
[

    {t:"微信", v:"1", sk:"", k:"weixin"}

];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
HYRZServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
{
	//显示停机
	var arrOpt = opt_array||HYRZServerSelect.STD_DATA;

	if(arrOpt && arrOpt.length > 0){
        var tempArrOpt = [];
		for(var i = 0; i < arrOpt.length; i++){
			if(typeof(arrOpt[i].display) != "undefined" && arrOpt[i].display != "" && arrOpt[i].display * 1 === 0){
				continue;
			}
        
			if(arrOpt[i].status * 1 === 0){
				if(arrOpt[i].t.indexOf('(停机)') >= 0){
					continue;
				}
				arrOpt[i].t += "(停机)";
			}
            tempArrOpt.push(arrOpt[i]);
		}
        arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
}

HYRZServerSelect.showzone2=function(select_array, ext_opt_array, opt_array)
{
	//停机隐藏
	var arrOpt = opt_array||HYRZServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		var tempArrOpt = [];
		for(var i = 0; i < arrOpt.length; i++){
			if(arrOpt[i].status * 1 != 0){
				tempArrOpt.push(arrOpt[i]);
			}
		}
		arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
}

HYRZServerSelect.showStatusByServerId = function(serverId){
	if(!serverId){
		return "";
	}	
	var arrOpt = HYRZServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		for(var i = 0; i < arrOpt.length; i++){
			if(serverId == arrOpt[i].v){
				return (arrOpt[i].status);
			}
		}
	}
	return "";
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////


HYRZServerSelect.zoneToName=function(ssn)
{
    var data=this.STD_DATA;
    var len=data.length;
    var result;
    for(var i=0;i<len;i++)
    {
        if(data[i].v==String(ssn))
        {
            result=data[i].t;
            break;
        }
    }
    return result || "";
}

HYRZServerSelect.ssn2desc=HYRZServerSelect.zoneToName;
/*  |xGv00|9503a3371b302b58d62a9bf626f70b38 */
