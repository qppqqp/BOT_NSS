const a = '```'

exports.wait = () => {
	return`*🏴‍☠️ESPERAR🏴‍☠️ PROCESAR*`
}

exports.succes = () => {
	return`*🏴‍☠️ÉXITO🏴‍☠️*`
}

exports.lvlon = () => {
	return`*🏴‍☠️HABILITAR🏴‍☠️ NIVELACIÓN*`
}

exports.lvloff = () => {
	return`*🏴‍☠️DESHABILITAR🏴‍☠️ NIVELAR*`
}

exports.lvlnul = () => {
	return`*TUS NIVELES AÚN VACÍOS 🏴‍☠️*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES DE GRUB NO SE HAN ACTIVADO 🏴‍☠️*`
}

exports.noregis = () => {
	return`*🏴‍☠️NO REGISTRADO🏴‍☠️*\n\n*Cómo registrarse ${prefix}daftar nombre|edad* \n*ejemplo ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*🏴‍☠️YA REGISTRADO🏴‍☠️\n\n*ya estás registrado en la base de datos del bot*`
}

exports.stikga = () => {
	return`*sí, falló, inténtalo de nuevo en un rato 🏴‍☠️*`
}

exports.linkga = () => {
	return`*lo siento, el enlace no es válido 🏴‍☠️*`
}

exports.groupo = () => {
	return`*SOLO GRUPO 🏴‍☠️*`
}

exports.ownerb = () => {
	return`*PROPIETARIO BOT ÚNICAMENTE 🏴‍☠️*`
}

exports.ownerg = () => {
	return`*SOLO GRUPO DE PROPIETARIOS 🏴‍☠️*`
}

exports.admin = () => {
	return`*SOLO GRUPO ADMINISTRADOR 🏴‍☠️*`
}

exports.badmin = () => {
	return`*LOS BOTS DEBEN SER ADMINISTRADOS 🏴‍☠️*`
}

exports.nsfwoff = () => {
	return`*NSFW NO ACTIVO*`
}

exports.bug = () => {
	return`*El problema se ha informado al propietario del BOT, no se responderá a los informes falsos 🏴‍☠️*`
}

exports.wrongf = () => {
	return`*formato incorrecto / texto vacío 🏴‍☠️*`
}

exports.clears = () => {
	return`*borrar todo el éxito*`
}

exports.pc = () => {
	return`*🏴‍☠️REGISTRO🏴‍☠️*\n\nPara saber si está registrado, consulte el mensaje que le envié \n\nNOTA:\n*si no ha recibido el mensaje. significa que no ha guardado el nombre del número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*🏴‍☠️DATOS DEL PAÍS🏴‍☠️*\n\nya estás registrado con datos \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
${a}SOBRE EL USUARIO 🏴‍☠️${a}
 ${a}[+] Nama : ${pushname}${a}
 ${a}[+] Premium :${a} ${premi}
 ${a}[+] Nomer : wa.me/${sender.split("@")[0]}${a}
 ${a}[+] Uang mu : Rp${uangku}${a}
 ${a}[+] XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}[+] Level : ${getLevelingLevel(sender)}${a}
 ${a}[+] Role : ${role}${a}
 ${a}[+] User register : ${_registered.length}${a}

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}☠️MENÚ DEL FABRICANTE${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}☠️MENÚ DIVERTIDO${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}moddroid${a} *[VIP]*
 ${a}╰•${prefix}happymod${a} *[VIP]*
 
${a}☠️MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}☠️MEDIA MENU${a}
 ${a}│•${prefix}brainly${a} *[VIP]*
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a} *[VIP]*
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}☠️CANCIÓN${a}
 ${a}╰•${prefix}joox${a} *[VIP]*
 
${a}☠️NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}☠️LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}☠️MENÚ GRUPO${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}☠️TOOLS${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}╰•${prefix}tupai${a}
 
${a}☠️ALMACENAMIENTO EN LA NUBE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}☠️MENÚ PROPIETARIO${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}ACERCA DEL BOT 🏴‍☠️${a}
 ${a}│ • Name : ${client.user.name}${a}
 ${a}│ • browser : ${client.browserDescription[1]}${a}
 ${a}│ • server : ${client.browserDescription[0]}${a}
 ${a}│ • version : ${client.browserDescription[2]}${a}
 ${a}│ • speed : ${process.uptime()}${a}
 ${a}│ • handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • versi wa : ${client.user.phone.wa_version}${a}
 
${a}☠️GRACIAS A${a}
 ${a}│${a}
 ${a}│ • BALTA 🏴‍☠️${a}
 ${a}│ • BX1 🏴‍☠️${a}
 ${a}│ • CRIPTO 🏴‍☠️${a}
 ${a}│ • ANGEL 🏴‍☠️${a}
 ${a}│${a}
 ${a}╰ • NOTE : No supliques${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*Felicitaciones 🏴‍☠️*
[+] *Nama* : ${pushname}
[+] *Nomer* : wa.me/${sender.split("@")[0]}
[+] *Xp* : ${getLevelingXp(sender)}
[+] *Limit* : +3
[+] *Role*: ${role}
[+] *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento ${pushname} El límite de hoy se acabó*\n*comprar límite para obtener límite / subir de nivel**`
}

exports.limitcount = (limitCounts) => {
	return`
*CONTAR LÍMITE 🏴‍☠️*
tu límite restante : ${limitCounts}

NOTA: para obtener el límite. puede pasar por subir de nivel o por límite de compra`
}

exports.satukos = () => {
	return`*Agregue el parámetro 1 / habilitar o 0 / deshabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Nombre* : ${pnom}
*Caducado*: 30 DÍAS\n*gracias por el pedido premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Nombre* : ${hnom}
*Caducado*: AHORA\n*gracias por ordenar premium pronto por comprar nuevamente*`
}

exports.premon = (pushname) => {
	return`LO SIENTO ${pushname} NO ES USUARIO PREMIUM`
}

