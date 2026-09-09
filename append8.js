if (typeof P8 !== 'undefined' && typeof P !== 'undefined') {
  const mapped=P8.map(x=>({name:x[0],slug:x[1],category:x[2],city:x[3],address:x[4],phone:x[5],phoneIntl:x[6],description:x[7],wa:x[8],waStatus:x[9]?'public':'unconfirmed',imageKey:x[10],tagline:x[11]||'',pitch:x[12]||'',journey:(x[13]||'Enquire|Call|WhatsApp').split('|')}));
  P.push(...mapped);
  const selected=P.find(x=>x.slug===param);
  selected?concept(selected):directory();
}