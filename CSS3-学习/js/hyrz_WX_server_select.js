
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

    {t:"1���Ұ���",v:"1", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"2���ٻ���",v:"2", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"3��������",v:"3", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"4���ϵ�ն��",v:"4", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"5�����ǲ���",v:"5", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"6�����ǲ��ﵺ",v:"6", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"7���λ�����",v:"7", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"8��������",v:"8", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"9����ڳ�ì",v:"9", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"10�����Ŷݼ�",v:"10", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"11�������ղ�",v:"11", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"12���ڰ߲�",v:"12", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"13���۹���",v:"13", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"14����ħ���｣",v:"14", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"15����֮��",v:"15", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"16�����ǲ�����",v:"16", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"17����Ȫ��",v:"17", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"18���ݲ�����",v:"18", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"19���������ޱ�",v:"19", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"20�����ص��̵�",v:"20", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"21����������",v:"21", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"22����֮��",v:"22", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"23������",v:"23", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"24����������",v:"24", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"25�������",v:"25", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"26��������",v:"26", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"27���׼�֮��",v:"27", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"28�����ǲ���",v:"28", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"29��ǧ��",v:"29", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"30��������",v:"30", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"31�����н�ӡ",v:"31", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"32������",v:"32", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"33����֮��",v:"33", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"34������",v:"34", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"35�����ɻ�",v:"35", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"36������",v:"36", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"37��ˮ�л�",v:"37", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"38��������",v:"38", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"39��ɽ������",v:"39", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"40���ҵ��ٲ�ն",v:"40", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"41�����з�ӡ",v:"41", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"42��Ӱ�糵",v:"42", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"43��������",v:"43", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"44��ǧ�ַ��",v:"44", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"45��Ӱ������",v:"45", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"46���˳��R",v:"46", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"47���������",v:"47", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"48����ɰ����",v:"48", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"49����֮��",v:"49", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"50����ľ������",v:"50", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"51������",v:"51", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"52��ɽ����",v:"52", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"53������ҷ�",v:"53", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"54����½��",v:"54", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"55�����ǲ���",v:"55", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"56����֮��",v:"56", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"57��ľ������",v:"57", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"58���ʷ�����",v:"58", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"59��˫����",v:"59", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"60�������ܺ�",v:"60", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"61��һ������",v:"61", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"62������",v:"62", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"63����������",v:"63", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"64��Ȯڣ��",v:"64", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"65��������",v:"65", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"66����֮��",v:"66", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"67����֪������",v:"67", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"68������",v:"68", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"69��˫ͷ��",v:"69", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"70��ľҶ��",v:"70", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"71��˲��ֹˮ",v:"71", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"72����ǧ����",v:"72", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"73��ˮ����",v:"73", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"74��ˮ�ϲ�",v:"74", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"75������ת��",v:"75", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"76�����پ���",v:"76", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"77��������",v:"77", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"78����ն",v:"78", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"79����а���",v:"79", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"80������ڤ",v:"80", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"81����������",v:"81", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"82��ҹ����",v:"82", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"83����������",v:"83", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"84�����ͷ�",v:"84", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"85����������",v:"85", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"1����������",v:"1", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"2��������ȴ",v:"2", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"3��ɳ����",v:"3", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"4����������",v:"4", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"5��ľҶ����",v:"5", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"6��ǧ������",v:"6", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"7�����׷���",v:"7", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"8��������",v:"8", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"9��Ѫ��������",v:"9", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"10��ˮ��֮��",v:"10", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"11��ǧ���߼�",v:"11", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"12��նն��",v:"12", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"13��ѻ֮ɭ",v:"13", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"14������ì",v:"14", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"15��Ӱ֮ʹ",v:"15", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"16������ˮ��",v:"16", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"17����֮��",v:"17", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"18����ľ֮ɭ",v:"18", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"19�����߻�֮��",v:"19", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"20��ִ�ŵ��ػ�",v:"20", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"21����Ŀ����",v:"21", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"22����֮��",v:"22", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"23������",v:"23", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"24���ĳ�����",v:"24", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"25�����꾻ƿ",v:"25", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"26����֮��",v:"26", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"27������׷����",v:"27", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"28�����ǲ�����",v:"28", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"29��ն�״�",v:"29", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"30������Ҳ",v:"30", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"31�������ӡ",v:"31", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"32������",v:"32", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"33����֮��",v:"33", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"34������",v:"34", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"35��Ӱ��ģ����",v:"35", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"36��ħ��",v:"36", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"37��ˮ����",v:"37", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"38�����ɽ",v:"38", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"39�����ٶ�",v:"39", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"40�����ˮ��",v:"40", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"41���Ӿ�����",v:"41", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"42������",v:"42", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"43�����ٴ�",v:"43", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"44����Ů־΢",v:"44", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"45����������",v:"45", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"46����̫֮��",v:"46", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"47������ڤ��",v:"47", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"48��ն�ղ�",v:"48", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"49��ɽ֮��",v:"49", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"50�����ǲ�����",v:"50", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"51������",v:"51", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"52�����S��",v:"52", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"53���¹⼲��",v:"53", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"54��������",v:"54", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"55��ǧ������",v:"55", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"56��ѩ֮��",v:"56", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"57��ľǹ����",v:"57", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"58��ˮ��֮��",v:"58", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"59��ˮ����",v:"59", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"60���ر�����",v:"60", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"61����ӡ֮��",v:"61", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"62������",v:"62", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"63�����׷Ÿ�",v:"63", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"64����Ůȡ��",v:"64", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"65��д����",v:"65", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"66����֮��",v:"66", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"67��î��Ϧ��",v:"67", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"68��α��",v:"68", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"69���׻���",v:"69", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"70����ĩ֮��",v:"70", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"71��Ѫ��֮��",v:"71", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"72�����컨��",v:"72", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"73��ˮ����",v:"73", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"74��ǧ����",v:"74", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"75��ʬ��⾡",v:"75", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"76���ݱ���",v:"76", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"77�����޵�",v:"77", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"78���ҷ���",v:"78", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"79����������",v:"79", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"80����Ұľ",v:"80", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"81����ѿ��",v:"81", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"82��ľҶ��",v:"82", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"83�������Ǳ�",v:"83", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"84���һ���",v:"84", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"85���������",v:"85", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"86������",v:"86", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"87��ʧ��֮��",v:"87", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"88����ɽ��",v:"88", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"89������",v:"89", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"90��ɽ�о�Ұ",v:"90", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"91������ٳ�",v:"91", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"92�����߸�",v:"92", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"93������",v:"93", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"94����սն",v:"94", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"95����а����",v:"95", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96���������",v:"96", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"97��������",v:"97", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"98��������",v:"98", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"99����֪ˮ��",v:"99", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"100������",v:"100", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"86������",v:"86", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"87�������µ�",v:"87", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"88��������",v:"88", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"89���λ�",v:"89", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"90������",v:"90", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"101��׷��",v:"101", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"102����ʯ��",v:"102", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"103��ǱӰ����",v:"103", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"104���ʷ���",v:"104", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"105��������",v:"105", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"91����ʮ��ջ�",v:"91", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"92��������",v:"92", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"93����ǲ",v:"93", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"94����ս��",v:"94", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"95�����罵��",v:"95", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"106������¶ǧ��",v:"106", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"107����ɳ֮Ы",v:"107", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"108��ǧɱˮ��",v:"108", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"109���ѿ�ˮ��",v:"109", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"110������",v:"110", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96���껢����",v:"96", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"97����������",v:"97", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"98����ȸ����",v:"98", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"99�����֩��",v:"99", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"100�����о�����",v:"100", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"111������������",v:"111", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"112��ת��С��",v:"112", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"113�����̵�ն",v:"113", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"114��ɭ֮ǧ��",v:"114", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"115��������",v:"115", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"96���껢����",v:"96", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"97����������",v:"97", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"98����ȸ����",v:"98", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"99�����֩��",v:"99", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"100�����о�����",v:"100", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"116��������",v:"116", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"117�����ޱ�",v:"117", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"118��֩�븿",v:"118", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"119����֮��",v:"119", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"120��Ѫ����̭",v:"120", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"101��ˮϮ",v:"101", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"102����ˮ��",v:"102", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"103������ҵ",v:"103", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"104��ɳ����",v:"104", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"105������",v:"105", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"121����ת����",v:"121", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"122��ǧ��",v:"122", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"123���׸�",v:"123", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"124����ɳ��",v:"124", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"125��������",v:"125", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"126��쫷�ˮ��",v:"126", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"127���̵�������",v:"127", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"128��������",v:"128", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"129�������ʸ",v:"129", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"130������",v:"130", s:"1", c:"1", sk:"android", ck:"weixin", status:"1", display:"1"}
,
    {t:"106�����ڵ�",v:"106", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"107������",v:"107", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"108��ˮ����ԭ",v:"108", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"109��ˮ����",v:"109", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}
,
    {t:"110����˵����",v:"110", s:"0", c:"1", sk:"ios", ck:"weixin", status:"1", display:"1"}

];

HYRZServerSelect.STD_SYSTEM_DATA=
[

    {t:"ƻ��(ios)", v:"0", k:"ios"}
,
    {t:"��׿(android)", v:"1", k:"android"}

];

HYRZServerSelect.STD_CHANNEL_DATA=
[

    {t:"΢��", v:"1", sk:"", k:"weixin"}

];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
HYRZServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
{
	//��ʾͣ��
	var arrOpt = opt_array||HYRZServerSelect.STD_DATA;

	if(arrOpt && arrOpt.length > 0){
        var tempArrOpt = [];
		for(var i = 0; i < arrOpt.length; i++){
			if(typeof(arrOpt[i].display) != "undefined" && arrOpt[i].display != "" && arrOpt[i].display * 1 === 0){
				continue;
			}
        
			if(arrOpt[i].status * 1 === 0){
				if(arrOpt[i].t.indexOf('(ͣ��)') >= 0){
					continue;
				}
				arrOpt[i].t += "(ͣ��)";
			}
            tempArrOpt.push(arrOpt[i]);
		}
        arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
}

HYRZServerSelect.showzone2=function(select_array, ext_opt_array, opt_array)
{
	//ͣ������
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
