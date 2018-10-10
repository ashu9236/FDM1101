/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: datepicker-af.js, datepicker-ar-DZ.js, datepicker-ar.js, datepicker-az.js, datepicker-be.js, datepicker-bg.js, datepicker-bs.js, datepicker-ca.js, datepicker-cs.js, datepicker-cy-GB.js, datepicker-da.js, datepicker-de.js, datepicker-el.js, datepicker-en-AU.js, datepicker-en-GB.js, datepicker-en-NZ.js, datepicker-eo.js, datepicker-es.js, datepicker-et.js, datepicker-eu.js, datepicker-fa.js, datepicker-fi.js, datepicker-fo.js, datepicker-fr-CA.js, datepicker-fr-CH.js, datepicker-fr.js, datepicker-gl.js, datepicker-he.js, datepicker-hi.js, datepicker-hr.js, datepicker-hu.js, datepicker-hy.js, datepicker-id.js, datepicker-is.js, datepicker-it-CH.js, datepicker-it.js, datepicker-ja.js, datepicker-ka.js, datepicker-kk.js, datepicker-km.js, datepicker-ko.js, datepicker-ky.js, datepicker-lb.js, datepicker-lt.js, datepicker-lv.js, datepicker-mk.js, datepicker-ml.js, datepicker-ms.js, datepicker-nb.js, datepicker-nl-BE.js, datepicker-nl.js, datepicker-nn.js, datepicker-no.js, datepicker-pl.js, datepicker-pt-BR.js, datepicker-pt.js, datepicker-rm.js, datepicker-ro.js, datepicker-ru.js, datepicker-sk.js, datepicker-sl.js, datepicker-sq.js, datepicker-sr-SR.js, datepicker-sr.js, datepicker-sv.js, datepicker-ta.js, datepicker-th.js, datepicker-tj.js, datepicker-tr.js, datepicker-uk.js, datepicker-vi.js, datepicker-zh-CN.js, datepicker-zh-HK.js, datepicker-zh-TW.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

var datepicker = $.datepicker;

/* Afrikaans initialisation for the jQuery UI date picker plugin. */
/* Written by Renier Pretorius. */


datepicker.regional['af'] = {
	closeText: 'Selekteer',
	prevText: 'Vorige',
	nextText: 'Volgende',
	currentText: 'Vandag',
	monthNames: ['Januarie','Februarie','Maart','April','Mei','Junie',
	'Julie','Augustus','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
	'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
	dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
	dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
	dayNamesMin: ['So','Ma','Di','Wo','Do','Vr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['af']);

var i18nDatepickerAf = datepicker.regional['af'];


/* Algerian Arabic Translation for jQuery UI date picker plugin. (can be used for Tunisia)*/
/* Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */



datepicker.regional['ar-DZ'] = {
	closeText: '?????',
	prevText: '&#x3C;??????',
	nextText: '??????&#x3E;',
	currentText: '?????',
	monthNames: ['?????', '?????', '????', '?????', '???', '????',
	'??????', '???', '??????','??????', '??????', '??????'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
	dayNamesShort: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
	dayNamesMin: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
	weekHeader: '?????',
	dateFormat: 'dd/mm/yy',
	firstDay: 6,
		isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ar-DZ']);

var i18nDatepickerArDz = datepicker.regional['ar-DZ'];


/* Arabic Translation for jQuery UI date picker plugin. */
/* Used in most of Arab countries, primarily in Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the United Arab Emirates, Egypt, Sudan and Yemen. */
/* Written by Mohammed Alshehri -- m@dralshehri.com */



datepicker.regional['ar'] = {
	closeText: '?????',
	prevText: '&#x3C;??????',
	nextText: '??????&#x3E;',
	currentText: '?????',
	monthNames: ['?????', '??????', '????', '?????', '????', '?????',
	'?????', '?????', '??????', '??????', '??????', '??????'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
	dayNamesShort: ['???', '?????', '??????', '??????', '????', '????', '???'],
	dayNamesMin: ['?', '?', '?', '?', '?', '?', '?'],
	weekHeader: '?????',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
		isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ar']);

var i18nDatepickerAr = datepicker.regional['ar'];


/* Azerbaijani (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */


datepicker.regional['az'] = {
	closeText: 'Bagla',
	prevText: '&#x3C;Geri',
	nextText: 'Ir?li&#x3E;',
	currentText: 'Bug�n',
	monthNames: ['Yanvar','Fevral','Mart','Aprel','May','Iyun',
	'Iyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
	monthNamesShort: ['Yan','Fev','Mar','Apr','May','Iyun',
	'Iyul','Avq','Sen','Okt','Noy','Dek'],
	dayNames: ['Bazar','Bazar ert?si','�?rs?nb? axsami','�?rs?nb?','C�m? axsami','C�m?','S?nb?'],
	dayNamesShort: ['B','Be','�a','�','Ca','C','S'],
	dayNamesMin: ['B','B','�','?','�','C','S'],
	weekHeader: 'Hf',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['az']);

var i18nDatepickerAz = datepicker.regional['az'];


/* Belarusian initialisation for the jQuery UI date picker plugin. */
/* Written by Pavel Selitskas <p.selitskas@gmail.com> */


datepicker.regional['be'] = {
	closeText: '????????',
	prevText: '&larr;?????.',
	nextText: '????.&rarr;',
	currentText: '??????',
	monthNames: ['????????','????','???????','????????','???????','???????',
	'??????','???????','????????','??????????','????????','????????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['???????','??????????','???????','??????','???????','???????','??????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '??',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['be']);

var i18nDatepickerBe = datepicker.regional['be'];


/* Bulgarian initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */


datepicker.regional['bg'] = {
	closeText: '???????',
	prevText: '&#x3C;?????',
	nextText: '??????&#x3E;',
	nextBigText: '&#x3E;&#x3E;',
	currentText: '????',
	monthNames: ['??????','????????','????','?????','???','???',
	'???','??????','?????????','????????','???????','????????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['??????','??????????','???????','?????','?????????','?????','??????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: 'Wk',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['bg']);

var i18nDatepickerBg = datepicker.regional['bg'];


/* Bosnian i18n for the jQuery UI date picker plugin. */
/* Written by Kenan Konjo. */


datepicker.regional['bs'] = {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Januar','Februar','Mart','April','Maj','Juni',
	'Juli','August','Septembar','Oktobar','Novembar','Decembar'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['Nedelja','Ponedeljak','Utorak','Srijeda','Cetvrtak','Petak','Subota'],
	dayNamesShort: ['Ned','Pon','Uto','Sri','Cet','Pet','Sub'],
	dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
	weekHeader: 'Wk',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['bs']);

var i18nDatepickerBs = datepicker.regional['bs'];


/* Inicialitzaci� en catal� per a l'extensi� 'UI date picker' per jQuery. */
/* Writers: (joan.leon@gmail.com). */


datepicker.regional['ca'] = {
	closeText: 'Tanca',
	prevText: 'Anterior',
	nextText: 'Seg�ent',
	currentText: 'Avui',
	monthNames: ['gener','febrer','mar�','abril','maig','juny',
	'juliol','agost','setembre','octubre','novembre','desembre'],
	monthNamesShort: ['gen','feb','mar�','abr','maig','juny',
	'jul','ag','set','oct','nov','des'],
	dayNames: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
	dayNamesShort: ['dg','dl','dt','dc','dj','dv','ds'],
	dayNamesMin: ['dg','dl','dt','dc','dj','dv','ds'],
	weekHeader: 'Set',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ca']);

var i18nDatepickerCa = datepicker.regional['ca'];


/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */


datepicker.regional['cs'] = {
	closeText: 'Zavr�t',
	prevText: '&#x3C;Dr�ve',
	nextText: 'Pozdeji&#x3E;',
	currentText: 'Nyn�',
	monthNames: ['leden','�nor','brezen','duben','kveten','cerven',
	'cervenec','srpen','z�r�','r�jen','listopad','prosinec'],
	monthNamesShort: ['led','�no','bre','dub','kve','cer',
	'cvc','srp','z�r','r�j','lis','pro'],
	dayNames: ['nedele', 'pondel�', '�ter�', 'streda', 'ctvrtek', 'p�tek', 'sobota'],
	dayNamesShort: ['ne', 'po', '�t', 'st', 'ct', 'p�', 'so'],
	dayNamesMin: ['ne','po','�t','st','ct','p�','so'],
	weekHeader: 'T�d',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['cs']);

var i18nDatepickerCs = datepicker.regional['cs'];


/* Welsh/UK initialisation for the jQuery UI date picker plugin. */
/* Written by William Griffiths. */


datepicker.regional['cy-GB'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
	'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
	monthNamesShort: ['Ion', 'Chw', 'Maw', 'Ebr', 'Mai', 'Meh',
	'Gor', 'Aws', 'Med', 'Hyd', 'Tac', 'Rha'],
	dayNames: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
	dayNamesShort: ['Sul', 'Llu', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
	dayNamesMin: ['Su','Ll','Ma','Me','Ia','Gw','Sa'],
	weekHeader: 'Wy',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['cy-GB']);

var i18nDatepickerCyGb = datepicker.regional['cy-GB'];


/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */


datepicker.regional['da'] = {
	closeText: 'Luk',
	prevText: '&#x3C;Forrige',
	nextText: 'N�ste&#x3E;',
	currentText: 'Idag',
	monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
	'Juli','August','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['S�ndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','L�rdag'],
	dayNamesShort: ['S�n','Man','Tir','Ons','Tor','Fre','L�r'],
	dayNamesMin: ['S�','Ma','Ti','On','To','Fr','L�'],
	weekHeader: 'Uge',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['da']);

var i18nDatepickerDa = datepicker.regional['da'];


/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */


datepicker.regional['de'] = {
	closeText: 'Schlie�en',
	prevText: '&#x3C;Zur�ck',
	nextText: 'Vor&#x3E;',
	currentText: 'Heute',
	monthNames: ['Januar','Februar','M�rz','April','Mai','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan','Feb','M�r','Apr','Mai','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dez'],
	dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
	dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	weekHeader: 'KW',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['de']);

var i18nDatepickerDe = datepicker.regional['de'];


/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */


datepicker.regional['el'] = {
	closeText: '??e?s?�?',
	prevText: '???????�e???',
	nextText: '?p?�e???',
	currentText: 'S?�e?a',
	monthNames: ['?a????????','Fe�????????','???t???','?p??????','?????','???????',
	'???????','?????st??','Sept?��????','??t?�????','???��????','?e??��????'],
	monthNamesShort: ['?a?','Fe�','?a?','?p?','?a?','????',
	'????','???','Sep','??t','??e','?e?'],
	dayNames: ['????a??','?e?t??a','???t?','?et??t?','??�pt?','?a?as?e??','S?��at?'],
	dayNamesShort: ['???','?e?','???','?et','?e�','?a?','Sa�'],
	dayNamesMin: ['??','?e','??','?e','?e','?a','Sa'],
	weekHeader: '?�d',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['el']);

var i18nDatepickerEl = datepicker.regional['el'];


/* English/Australia initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */


datepicker.regional['en-AU'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['en-AU']);

var i18nDatepickerEnAu = datepicker.regional['en-AU'];


/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */


datepicker.regional['en-GB'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['en-GB']);

var i18nDatepickerEnGb = datepicker.regional['en-GB'];


/* English/New Zealand initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */


datepicker.regional['en-NZ'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['en-NZ']);

var i18nDatepickerEnNz = datepicker.regional['en-NZ'];


/* Esperanto initialisation for the jQuery UI date picker plugin. */
/* Written by Olivier M. (olivierweb@ifrance.com). */


datepicker.regional['eo'] = {
	closeText: 'Fermi',
	prevText: '&#x3C;Anta',
	nextText: 'Sekv&#x3E;',
	currentText: 'Nuna',
	monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
	'Julio','Augusto','Septembro','Oktobro','Novembro','Decembro'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['Dimanco','Lundo','Mardo','Merkredo','Jaudo','Vendredo','Sabato'],
	dayNamesShort: ['Dim','Lun','Mar','Mer','Jau','Ven','Sab'],
	dayNamesMin: ['Di','Lu','Ma','Me','Ja','Ve','Sa'],
	weekHeader: 'Sb',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['eo']);

var i18nDatepickerEo = datepicker.regional['eo'];


/* Inicializaci�n en espa�ol para la extensi�n 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */


datepicker.regional['es'] = {
	closeText: 'Cerrar',
	prevText: '&#x3C;Ant',
	nextText: 'Sig&#x3E;',
	currentText: 'Hoy',
	monthNames: ['enero','febrero','marzo','abril','mayo','junio',
	'julio','agosto','septiembre','octubre','noviembre','diciembre'],
	monthNamesShort: ['ene','feb','mar','abr','may','jun',
	'jul','ago','sep','oct','nov','dic'],
	dayNames: ['domingo','lunes','martes','mi�rcoles','jueves','viernes','s�bado'],
	dayNamesShort: ['dom','lun','mar','mi�','jue','vie','s�b'],
	dayNamesMin: ['D','L','M','X','J','V','S'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['es']);

var i18nDatepickerEs = datepicker.regional['es'];


/* Estonian initialisation for the jQuery UI date picker plugin. */
/* Written by Mart S�mermaa (mrts.pydev at gmail com). */


datepicker.regional['et'] = {
	closeText: 'Sulge',
	prevText: 'Eelnev',
	nextText: 'J�rgnev',
	currentText: 'T�na',
	monthNames: ['Jaanuar','Veebruar','M�rts','Aprill','Mai','Juuni',
	'Juuli','August','September','Oktoober','November','Detsember'],
	monthNamesShort: ['Jaan', 'Veebr', 'M�rts', 'Apr', 'Mai', 'Juuni',
	'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
	dayNames: ['P�hap�ev', 'Esmasp�ev', 'Teisip�ev', 'Kolmap�ev', 'Neljap�ev', 'Reede', 'Laup�ev'],
	dayNamesShort: ['P�hap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
	dayNamesMin: ['P','E','T','K','N','R','L'],
	weekHeader: 'n�d',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['et']);

var i18nDatepickerEt = datepicker.regional['et'];


/* Karrikas-ek itzulia (karrikas@karrikas.com) */


datepicker.regional['eu'] = {
	closeText: 'Egina',
	prevText: '&#x3C;Aur',
	nextText: 'Hur&#x3E;',
	currentText: 'Gaur',
	monthNames: ['urtarrila','otsaila','martxoa','apirila','maiatza','ekaina',
		'uztaila','abuztua','iraila','urria','azaroa','abendua'],
	monthNamesShort: ['urt.','ots.','mar.','api.','mai.','eka.',
		'uzt.','abu.','ira.','urr.','aza.','abe.'],
	dayNames: ['igandea','astelehena','asteartea','asteazkena','osteguna','ostirala','larunbata'],
	dayNamesShort: ['ig.','al.','ar.','az.','og.','ol.','lr.'],
	dayNamesMin: ['ig','al','ar','az','og','ol','lr'],
	weekHeader: 'As',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['eu']);

var i18nDatepickerEu = datepicker.regional['eu'];


/* Persian (Farsi) Translation for the jQuery UI date picker plugin. */
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */


datepicker.regional['fa'] = {
	closeText: '????',
	prevText: '&#x3C;????',
	nextText: '????&#x3E;',
	currentText: '?????',
	monthNames: [
		'??????',
		'?????',
		'????',
		'?????',
		'??',
		'????',
		'?????',
		'???',
		'???????',
		'?????',
		'??????',
		'??????'
	],
	monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
	dayNames: [
		'??????',
		'??????',
		'???????',
		'????????',
		'???????',
		'????',
		'????'
	],
	dayNamesShort: [
		'?',
		'?',
		'?',
		'?',
		'?',
		'?',
		'?'
	],
	dayNamesMin: [
		'?',
		'?',
		'?',
		'?',
		'?',
		'?',
		'?'
	],
	weekHeader: '??',
	dateFormat: 'yy/mm/dd',
	firstDay: 6,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fa']);

var i18nDatepickerFa = datepicker.regional['fa'];


/* Finnish initialisation for the jQuery UI date picker plugin. */
/* Written by Harri Kilpi� (harrikilpio@gmail.com). */


datepicker.regional['fi'] = {
	closeText: 'Sulje',
	prevText: '&#xAB;Edellinen',
	nextText: 'Seuraava&#xBB;',
	currentText: 'T�n��n',
	monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kes�kuu',
	'Hein�kuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
	monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kes�',
	'Hein�','Elo','Syys','Loka','Marras','Joulu'],
	dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','La'],
	dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
	dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
	weekHeader: 'Vk',
	dateFormat: 'd.m.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fi']);

var i18nDatepickerFi = datepicker.regional['fi'];


/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */


datepicker.regional['fo'] = {
	closeText: 'Lat aftur',
	prevText: '&#x3C;Fyrra',
	nextText: 'N�sta&#x3E;',
	currentText: '� dag',
	monthNames: ['Januar','Februar','Mars','Apr�l','Mei','Juni',
	'Juli','August','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Aug','Sep','Okt','Nov','Des'],
	dayNames: ['Sunnudagur','M�nadagur','T�sdagur','Mikudagur','H�sdagur','Fr�ggjadagur','Leyardagur'],
	dayNamesShort: ['Sun','M�n','T�s','Mik','H�s','Fr�','Ley'],
	dayNamesMin: ['Su','M�','T�','Mi','H�','Fr','Le'],
	weekHeader: 'Vk',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fo']);

var i18nDatepickerFo = datepicker.regional['fo'];


/* Canadian-French initialisation for the jQuery UI date picker plugin. */


datepicker.regional['fr-CA'] = {
	closeText: 'Fermer',
	prevText: 'Pr�c�dent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'f�vrier', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'ao�t', 'septembre', 'octobre', 'novembre', 'd�cembre'],
	monthNamesShort: ['janv.', 'f�vr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'ao�t', 'sept.', 'oct.', 'nov.', 'd�c.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Sem.',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['fr-CA']);

var i18nDatepickerFrCa = datepicker.regional['fr-CA'];


/* Swiss-French initialisation for the jQuery UI date picker plugin. */
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */


datepicker.regional['fr-CH'] = {
	closeText: 'Fermer',
	prevText: '&#x3C;Pr�c',
	nextText: 'Suiv&#x3E;',
	currentText: 'Courant',
	monthNames: ['janvier', 'f�vrier', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'ao�t', 'septembre', 'octobre', 'novembre', 'd�cembre'],
	monthNamesShort: ['janv.', 'f�vr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'ao�t', 'sept.', 'oct.', 'nov.', 'd�c.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
	weekHeader: 'Sm',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fr-CH']);

var i18nDatepickerFrCh = datepicker.regional['fr-CH'];


/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  St�phane Nahmani (sholby@sholby.net),
			  St�phane Raimbault <stephane.raimbault@gmail.com> */


datepicker.regional['fr'] = {
	closeText: 'Fermer',
	prevText: 'Pr�c�dent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'f�vrier', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'ao�t', 'septembre', 'octobre', 'novembre', 'd�cembre'],
	monthNamesShort: ['janv.', 'f�vr.', 'mars', 'avr.', 'mai', 'juin',
		'juil.', 'ao�t', 'sept.', 'oct.', 'nov.', 'd�c.'],
	dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
	dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
	dayNamesMin: ['D','L','M','M','J','V','S'],
	weekHeader: 'Sem.',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['fr']);

var i18nDatepickerFr = datepicker.regional['fr'];


/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */


datepicker.regional['gl'] = {
	closeText: 'Pechar',
	prevText: '&#x3C;Ant',
	nextText: 'Seg&#x3E;',
	currentText: 'Hoxe',
	monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xu�o',
	'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
	monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xu�',
	'Xul','Ago','Set','Out','Nov','Dec'],
	dayNames: ['Domingo','Luns','Martes','M�rcores','Xoves','Venres','S�bado'],
	dayNamesShort: ['Dom','Lun','Mar','M�r','Xov','Ven','S�b'],
	dayNamesMin: ['Do','Lu','Ma','M�','Xo','Ve','S�'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['gl']);

var i18nDatepickerGl = datepicker.regional['gl'];


/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */


datepicker.regional['he'] = {
	closeText: '????',
	prevText: '&#x3C;?????',
	nextText: '???&#x3E;',
	currentText: '????',
	monthNames: ['?????','??????','???','?????','???','????',
	'????','??????','??????','???????','??????','?????'],
	monthNamesShort: ['???','???','???','???','???','????',
	'????','???','???','???','???','???'],
	dayNames: ['?????','???','?????','?????','?????','????','???'],
	dayNamesShort: ['?\'','?\'','?\'','?\'','?\'','?\'','???'],
	dayNamesMin: ['?\'','?\'','?\'','?\'','?\'','?\'','???'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: true,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['he']);

var i18nDatepickerHe = datepicker.regional['he'];


/* Hindi initialisation for the jQuery UI date picker plugin. */
/* Written by Michael Dawart. */


datepicker.regional['hi'] = {
	closeText: '???',
	prevText: '?????',
	nextText: '????',
	currentText: '??',
	monthNames: ['????? ','?????','?????','??????','??','???',
	'?????','????? ','???????','???????','??????','???????'],
	monthNamesShort: ['??', '??', '?????', '??????', '??', '???',
	'?????', '??', '???', '????', '??', '??'],
	dayNames: ['??????', '??????', '???????', '??????', '???????', '????????', '??????'],
	dayNamesShort: ['???', '???', '????', '???', '????', '?????', '???'],
	dayNamesMin: ['???', '???', '????', '???', '????', '?????', '???'],
	weekHeader: '?????',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hi']);

var i18nDatepickerHi = datepicker.regional['hi'];


/* Croatian i18n for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */


datepicker.regional['hr'] = {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Sijecanj','Veljaca','O�ujak','Travanj','Svibanj','Lipanj',
	'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
	monthNamesShort: ['Sij','Velj','O�u','Tra','Svi','Lip',
	'Srp','Kol','Ruj','Lis','Stu','Pro'],
	dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Cetvrtak','Petak','Subota'],
	dayNamesShort: ['Ned','Pon','Uto','Sri','Cet','Pet','Sub'],
	dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
	weekHeader: 'Tje',
	dateFormat: 'dd.mm.yy.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hr']);

var i18nDatepickerHr = datepicker.regional['hr'];


/* Hungarian initialisation for the jQuery UI date picker plugin. */


datepicker.regional['hu'] = {
	closeText: 'bez�r',
	prevText: 'vissza',
	nextText: 'elore',
	currentText: 'ma',
	monthNames: ['Janu�r', 'Febru�r', 'M�rcius', '�prilis', 'M�jus', 'J�nius',
	'J�lius', 'Augusztus', 'Szeptember', 'Okt�ber', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'M�r', '�pr', 'M�j', 'J�n',
	'J�l', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Vas�rnap', 'H�tfo', 'Kedd', 'Szerda', 'Cs�t�rt�k', 'P�ntek', 'Szombat'],
	dayNamesShort: ['Vas', 'H�t', 'Ked', 'Sze', 'Cs�', 'P�n', 'Szo'],
	dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
	weekHeader: 'H�t',
	dateFormat: 'yy.mm.dd.',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hu']);

var i18nDatepickerHu = datepicker.regional['hu'];


/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/


datepicker.regional['hy'] = {
	closeText: '?????',
	prevText: '&#x3C;???.',
	nextText: '???.&#x3E;',
	currentText: '?????',
	monthNames: ['???????','???????','????','?????','?????','??????',
	'??????','???????','?????????','?????????','????????','?????????'],
	monthNamesShort: ['?????','????','????','???','?????','??????',
	'????','???','???','???','???','???'],
	dayNames: ['??????','?????????','?????????','??????????','?????????','??????','?????'],
	dayNamesShort: ['???','???','???','???','???','????','???'],
	dayNamesMin: ['???','???','???','???','???','????','???'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hy']);

var i18nDatepickerHy = datepicker.regional['hy'];


/* Indonesian initialisation for the jQuery UI date picker plugin. */
/* Written by Deden Fathurahman (dedenf@gmail.com). */


datepicker.regional['id'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;mundur',
	nextText: 'maju&#x3E;',
	currentText: 'hari ini',
	monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
	'Juli','Agustus','September','Oktober','Nopember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Agus','Sep','Okt','Nop','Des'],
	dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
	dayNamesShort: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
	dayNamesMin: ['Mg','Sn','Sl','Rb','Km','jm','Sb'],
	weekHeader: 'Mg',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['id']);

var i18nDatepickerId = datepicker.regional['id'];


/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */


datepicker.regional['is'] = {
	closeText: 'Loka',
	prevText: '&#x3C; Fyrri',
	nextText: 'N�sti &#x3E;',
	currentText: '� dag',
	monthNames: ['Jan�ar','Febr�ar','Mars','Apr�l','Ma�','J�n�',
	'J�l�','�g�st','September','Okt�ber','N�vember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Ma�','J�n',
	'J�l','�g�','Sep','Okt','N�v','Des'],
	dayNames: ['Sunnudagur','M�nudagur','�ri�judagur','Mi�vikudagur','Fimmtudagur','F�studagur','Laugardagur'],
	dayNamesShort: ['Sun','M�n','�ri','Mi�','Fim','F�s','Lau'],
	dayNamesMin: ['Su','M�','�r','Mi','Fi','F�','La'],
	weekHeader: 'Vika',
	dateFormat: 'dd.mm.yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['is']);

var i18nDatepickerIs = datepicker.regional['is'];


/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */


datepicker.regional['it-CH'] = {
	closeText: 'Chiudi',
	prevText: '&#x3C;Prec',
	nextText: 'Succ&#x3E;',
	currentText: 'Oggi',
	monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
		'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
	monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
		'Lug','Ago','Set','Ott','Nov','Dic'],
	dayNames: ['Domenica','Luned�','Marted�','Mercoled�','Gioved�','Venerd�','Sabato'],
	dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
	dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
	weekHeader: 'Sm',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['it-CH']);

var i18nDatepickerItCh = datepicker.regional['it-CH'];


/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */


datepicker.regional['it'] = {
	closeText: 'Chiudi',
	prevText: '&#x3C;Prec',
	nextText: 'Succ&#x3E;',
	currentText: 'Oggi',
	monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
		'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
	monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
		'Lug','Ago','Set','Ott','Nov','Dic'],
	dayNames: ['Domenica','Luned�','Marted�','Mercoled�','Gioved�','Venerd�','Sabato'],
	dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
	dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['it']);

var i18nDatepickerIt = datepicker.regional['it'];


/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */


datepicker.regional['ja'] = {
	closeText: '???',
	prevText: '&#x3C;?',
	nextText: '?&#x3E;',
	currentText: '??',
	monthNames: ['1?','2?','3?','4?','5?','6?',
	'7?','8?','9?','10?','11?','12?'],
	monthNamesShort: ['1?','2?','3?','4?','5?','6?',
	'7?','8?','9?','10?','11?','12?'],
	dayNames: ['???','???','???','???','???','???','???'],
	dayNamesShort: ['?','?','?','?','?','?','?'],
	dayNamesMin: ['?','?','?','?','?','?','?'],
	weekHeader: '?',
	dateFormat: 'yy/mm/dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '?'};
datepicker.setDefaults(datepicker.regional['ja']);

var i18nDatepickerJa = datepicker.regional['ja'];


/* Georgian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Lado Lomidze (lado.lomidze@gmail.com). */


datepicker.regional['ka'] = {
	closeText: '???????',
	prevText: '&#x3c; ????',
	nextText: '??????? &#x3e;',
	currentText: '????',
	monthNames: ['???????','?????????','?????','??????','?????','??????', '??????','???????','??????????','?????????','????????','?????????'],
	monthNamesShort: ['???','???','???','???','???','???', '???','???','???','???','???','???'],
	dayNames: ['?????','????????','?????????','?????????','?????????','?????????','??????'],
	dayNamesShort: ['??','???','???','???','???','???','???'],
	dayNamesMin: ['??','???','???','???','???','???','???'],
	weekHeader: '?????',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ka']);

var i18nDatepickerKa = datepicker.regional['ka'];


/* Kazakh (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Dmitriy Karasyov (dmitriy.karasyov@gmail.com). */


datepicker.regional['kk'] = {
	closeText: '????',
	prevText: '&#x3C;???????',
	nextText: '??????&#x3E;',
	currentText: '?????',
	monthNames: ['??????','?????','??????','?????','?????','??????',
	'?????','?????','????????','?????','??????','?????????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['????????','????????','????????','????????','????????','????','?????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '??',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['kk']);

var i18nDatepickerKk = datepicker.regional['kk'];


/* Khmer initialisation for the jQuery calendar extension. */
/* Written by Chandara Om (chandara.teacher@gmail.com). */


datepicker.regional['km'] = {
	closeText: '????????',
	prevText: '???',
	nextText: '???????',
	currentText: '????????',
	monthNames: ['????','??????','????','????','????','??????',
	'??????','????','?????','????','????????','????'],
	monthNamesShort: ['????','??????','????','????','????','??????',
	'??????','????','?????','????','????????','????'],
	dayNames: ['???????', '????', '??????', '???', '??????????', '?????', '????'],
	dayNamesShort: ['??', '?', '?', '??', '????', '??', '??'],
	dayNamesMin: ['??', '?', '?', '??', '????', '??', '??'],
	weekHeader: '???????',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['km']);

var i18nDatepickerKm = datepicker.regional['km'];


/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */


datepicker.regional['ko'] = {
	closeText: '??',
	prevText: '???',
	nextText: '???',
	currentText: '??',
	monthNames: ['1?','2?','3?','4?','5?','6?',
	'7?','8?','9?','10?','11?','12?'],
	monthNamesShort: ['1?','2?','3?','4?','5?','6?',
	'7?','8?','9?','10?','11?','12?'],
	dayNames: ['???','???','???','???','???','???','???'],
	dayNamesShort: ['?','?','?','?','?','?','?'],
	dayNamesMin: ['?','?','?','?','?','?','?'],
	weekHeader: 'Wk',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '?'};
datepicker.setDefaults(datepicker.regional['ko']);

var i18nDatepickerKo = datepicker.regional['ko'];


/* Kyrgyz (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Sergey Kartashov (ebishkek@yandex.ru). */


datepicker.regional['ky'] = {
	closeText: '?????',
	prevText: '&#x3c;???',
	nextText: '???&#x3e;',
	currentText: '?????',
	monthNames: ['??????','???????','????','??????','???','????',
	'????','??????','????????','???????','??????','???????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['????????', '????????', '????????', '????????', '????????', '????', '??????'],
	dayNamesShort: ['???', '???', '???', '???', '???', '???', '???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['ky']);

var i18nDatepickerKy = datepicker.regional['ky'];


/* Luxembourgish initialisation for the jQuery UI date picker plugin. */
/* Written by Michel Weimerskirch <michel@weimerskirch.net> */


datepicker.regional['lb'] = {
	closeText: 'F�erdeg',
	prevText: 'Zr�ck',
	nextText: 'Weider',
	currentText: 'Haut',
	monthNames: ['Januar','Februar','M�erz','Abr�ll','Mee','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan', 'Feb', 'M�e', 'Abr', 'Mee', 'Jun',
	'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
	dayNames: ['Sonndeg', 'M�indeg', 'D�nschdeg', 'M�ttwoch', 'Donneschdeg', 'Freideg', 'Samschdeg'],
	dayNamesShort: ['Son', 'M�i', 'D�n', 'M�t', 'Don', 'Fre', 'Sam'],
	dayNamesMin: ['So','M�','D�','M�','Do','Fr','Sa'],
	weekHeader: 'W',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lb']);

var i18nDatepickerLb = datepicker.regional['lb'];


/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */


datepicker.regional['lt'] = {
	closeText: 'U�daryti',
	prevText: '&#x3C;Atgal',
	nextText: 'Pirmyn&#x3E;',
	currentText: '�iandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegu�e','Bir�elis',
	'Liepa','Rugpjutis','Rugsejis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugp','Rugs','Spa','Lap','Gru'],
	dayNames: ['sekmadienis','pirmadienis','antradienis','treciadienis','ketvirtadienis','penktadienis','�e�tadienis'],
	dayNamesShort: ['sek','pir','ant','tre','ket','pen','�e�'],
	dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','�e'],
	weekHeader: 'SAV',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lt']);

var i18nDatepickerLt = datepicker.regional['lt'];


/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */


datepicker.regional['lv'] = {
	closeText: 'Aizvert',
	prevText: 'Iepr.',
	nextText: 'Nak.',
	currentText: '�odien',
	monthNames: ['Janvaris','Februaris','Marts','Aprilis','Maijs','Junijs',
	'Julijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['svetdiena','pirmdiena','otrdiena','tre�diena','ceturtdiena','piektdiena','sestdiena'],
	dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
	dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
	weekHeader: 'Ned.',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['lv']);

var i18nDatepickerLv = datepicker.regional['lv'];


/* Macedonian i18n for the jQuery UI date picker plugin. */
/* Written by Stojce Slavkovski. */


datepicker.regional['mk'] = {
	closeText: '???????',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: '?????',
	monthNames: ['???????','????????','????','?????','???','????',
	'????','??????','?????????','????????','???????','????????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['??????','??????????','???????','?????','????????','?????','??????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['mk']);

var i18nDatepickerMk = datepicker.regional['mk'];


/* Malayalam (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Saji Nediyanchath (saji89@gmail.com). */


datepicker.regional['ml'] = {
	closeText: '???',
	prevText: '?????????',
	nextText: '???????? ',
	currentText: '?????',
	monthNames: ['??????','?????????','?????????','????????','????','?????',
	'????','????????','????????????','?????????','???????','????????'],
	monthNamesShort: ['???', '????', '?????', '?????', '????', '?????',
	'????', '??', '????', '?????', '???', '???'],
	dayNames: ['??????', '????????', '?????', '??????', '??????', '??????', '???'],
	dayNamesShort: ['???', '?????', '?????', '???', '??????', '??????', '???'],
	dayNamesMin: ['??','??','??','??','????','??','?'],
	weekHeader: '?',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ml']);

var i18nDatepickerMl = datepicker.regional['ml'];


/* Malaysian initialisation for the jQuery UI date picker plugin. */
/* Written by Mohd Nawawi Mohamad Jamili (nawawi@ronggeng.net). */


datepicker.regional['ms'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;Sebelum',
	nextText: 'Selepas&#x3E;',
	currentText: 'hari ini',
	monthNames: ['Januari','Februari','Mac','April','Mei','Jun',
	'Julai','Ogos','September','Oktober','November','Disember'],
	monthNamesShort: ['Jan','Feb','Mac','Apr','Mei','Jun',
	'Jul','Ogo','Sep','Okt','Nov','Dis'],
	dayNames: ['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'],
	dayNamesShort: ['Aha','Isn','Sel','Rab','kha','Jum','Sab'],
	dayNamesMin: ['Ah','Is','Se','Ra','Kh','Ju','Sa'],
	weekHeader: 'Mg',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ms']);

var i18nDatepickerMs = datepicker.regional['ms'];


/* Norwegian Bokm�l initialisation for the jQuery UI date picker plugin. */
/* Written by Bj�rn Johansen (post@bjornjohansen.no). */


datepicker.regional['nb'] = {
	closeText: 'Lukk',
	prevText: '&#xAB;Forrige',
	nextText: 'Neste&#xBB;',
	currentText: 'I dag',
	monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
	monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
	dayNamesShort: ['s�n','man','tir','ons','tor','fre','l�r'],
	dayNames: ['s�ndag','mandag','tirsdag','onsdag','torsdag','fredag','l�rdag'],
	dayNamesMin: ['s�','ma','ti','on','to','fr','l�'],
	weekHeader: 'Uke',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['nb']);

var i18nDatepickerNb = datepicker.regional['nb'];


/* Dutch (Belgium) initialisation for the jQuery UI date picker plugin. */
/* David De Sloovere @DavidDeSloovere */


datepicker.regional['nl-BE'] = {
	closeText: 'Sluiten',
	prevText: '?',
	nextText: '?',
	currentText: 'Vandaag',
	monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
	'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
	'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
	dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
	dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
	dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['nl-BE']);

var i18nDatepickerNlBe = datepicker.regional['nl-BE'];


/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <http://mathiasbynens.be/> */


datepicker.regional.nl = {
	closeText: 'Sluiten',
	prevText: '?',
	nextText: '?',
	currentText: 'Vandaag',
	monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
	'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
	'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
	dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
	dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
	dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
	weekHeader: 'Wk',
	dateFormat: 'dd-mm-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional.nl);

var i18nDatepickerNl = datepicker.regional.nl;


/* Norwegian Nynorsk initialisation for the jQuery UI date picker plugin. */
/* Written by Bj�rn Johansen (post@bjornjohansen.no). */


datepicker.regional['nn'] = {
	closeText: 'Lukk',
	prevText: '&#xAB;F�rre',
	nextText: 'Neste&#xBB;',
	currentText: 'I dag',
	monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
	monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
	dayNamesShort: ['sun','m�n','tys','ons','tor','fre','lau'],
	dayNames: ['sundag','m�ndag','tysdag','onsdag','torsdag','fredag','laurdag'],
	dayNamesMin: ['su','m�','ty','on','to','fr','la'],
	weekHeader: 'Veke',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['nn']);

var i18nDatepickerNn = datepicker.regional['nn'];


/* Norwegian initialisation for the jQuery UI date picker plugin. */
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */



datepicker.regional['no'] = {
	closeText: 'Lukk',
	prevText: '&#xAB;Forrige',
	nextText: 'Neste&#xBB;',
	currentText: 'I dag',
	monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
	monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
	dayNamesShort: ['s�n','man','tir','ons','tor','fre','l�r'],
	dayNames: ['s�ndag','mandag','tirsdag','onsdag','torsdag','fredag','l�rdag'],
	dayNamesMin: ['s�','ma','ti','on','to','fr','l�'],
	weekHeader: 'Uke',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
datepicker.setDefaults(datepicker.regional['no']);

var i18nDatepickerNo = datepicker.regional['no'];


/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */


datepicker.regional['pl'] = {
	closeText: 'Zamknij',
	prevText: '&#x3C;Poprzedni',
	nextText: 'Nastepny&#x3E;',
	currentText: 'Dzis',
	monthNames: ['Styczen','Luty','Marzec','Kwiecien','Maj','Czerwiec',
	'Lipiec','Sierpien','Wrzesien','Pazdziernik','Listopad','Grudzien'],
	monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
	'Lip','Sie','Wrz','Pa','Lis','Gru'],
	dayNames: ['Niedziela','Poniedzialek','Wtorek','Sroda','Czwartek','Piatek','Sobota'],
	dayNamesShort: ['Nie','Pn','Wt','Sr','Czw','Pt','So'],
	dayNamesMin: ['N','Pn','Wt','Sr','Cz','Pt','So'],
	weekHeader: 'Tydz',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['pl']);

var i18nDatepickerPl = datepicker.regional['pl'];


/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */


datepicker.regional['pt-BR'] = {
	closeText: 'Fechar',
	prevText: '&#x3C;Anterior',
	nextText: 'Pr�ximo&#x3E;',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda-feira','Ter�a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S�bado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b'],
	dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['pt-BR']);

var i18nDatepickerPtBr = datepicker.regional['pt-BR'];


/* Portuguese initialisation for the jQuery UI date picker plugin. */


datepicker.regional['pt'] = {
	closeText: 'Fechar',
	prevText: 'Anterior',
	nextText: 'Seguinte',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda-feira','Ter�a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S�bado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b'],
	dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b'],
	weekHeader: 'Sem',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['pt']);

var i18nDatepickerPt = datepicker.regional['pt'];


/* Romansh initialisation for the jQuery UI date picker plugin. */
/* Written by Yvonne Gienal (yvonne.gienal@educa.ch). */


datepicker.regional['rm'] = {
	closeText: 'Serrar',
	prevText: '&#x3C;Suandant',
	nextText: 'Precedent&#x3E;',
	currentText: 'Actual',
	monthNames: ['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur', 'Fanadur','Avust','Settember','October','November','December'],
	monthNamesShort: ['Scha','Fev','Mar','Avr','Matg','Zer', 'Fan','Avu','Sett','Oct','Nov','Dec'],
	dayNames: ['Dumengia','Glindesdi','Mardi','Mesemna','Gievgia','Venderdi','Sonda'],
	dayNamesShort: ['Dum','Gli','Mar','Mes','Gie','Ven','Som'],
	dayNamesMin: ['Du','Gl','Ma','Me','Gi','Ve','So'],
	weekHeader: 'emna',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['rm']);

var i18nDatepickerRm = datepicker.regional['rm'];


/* Romanian initialisation for the jQuery UI date picker plugin.
 *
 * Written by Edmond L. (ll_edmond@walla.com)
 * and Ionut G. Stan (ionut.g.stan@gmail.com)
 */


datepicker.regional['ro'] = {
	closeText: '�nchide',
	prevText: '&#xAB; Luna precedenta',
	nextText: 'Luna urmatoare &#xBB;',
	currentText: 'Azi',
	monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
	'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
	monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
	'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'S�mbata'],
	dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'S�m'],
	dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','S�'],
	weekHeader: 'Sapt',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ro']);

var i18nDatepickerRo = datepicker.regional['ro'];


/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */


datepicker.regional['ru'] = {
	closeText: '???????',
	prevText: '&#x3C;????',
	nextText: '????&#x3E;',
	currentText: '???????',
	monthNames: ['??????','???????','????','??????','???','????',
	'????','??????','????????','???????','??????','???????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['???????????','???????????','???????','?????','???????','???????','???????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ru']);

var i18nDatepickerRu = datepicker.regional['ru'];


/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */


datepicker.regional['sk'] = {
	closeText: 'Zavriet',
	prevText: '&#x3C;Predch�dzaj�ci',
	nextText: 'Nasleduj�ci&#x3E;',
	currentText: 'Dnes',
	monthNames: ['janu�r','febru�r','marec','apr�l','m�j','j�n',
	'j�l','august','september','okt�ber','november','december'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','M�j','J�n',
	'J�l','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['nedela','pondelok','utorok','streda','�tvrtok','piatok','sobota'],
	dayNamesShort: ['Ned','Pon','Uto','Str','�tv','Pia','Sob'],
	dayNamesMin: ['Ne','Po','Ut','St','�t','Pia','So'],
	weekHeader: 'Ty',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sk']);

var i18nDatepickerSk = datepicker.regional['sk'];


/* Slovenian initialisation for the jQuery UI date picker plugin. */
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = c, s = � z = � C = C S = � Z = � */


datepicker.regional['sl'] = {
	closeText: 'Zapri',
	prevText: '&#x3C;Prej�nji',
	nextText: 'Naslednji&#x3E;',
	currentText: 'Trenutni',
	monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
	'Julij','Avgust','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Avg','Sep','Okt','Nov','Dec'],
	dayNames: ['Nedelja','Ponedeljek','Torek','Sreda','Cetrtek','Petek','Sobota'],
	dayNamesShort: ['Ned','Pon','Tor','Sre','Cet','Pet','Sob'],
	dayNamesMin: ['Ne','Po','To','Sr','Ce','Pe','So'],
	weekHeader: 'Teden',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sl']);

var i18nDatepickerSl = datepicker.regional['sl'];


/* Albanian initialisation for the jQuery UI date picker plugin. */
/* Written by Flakron Bytyqi (flakron@gmail.com). */


datepicker.regional['sq'] = {
	closeText: 'mbylle',
	prevText: '&#x3C;mbrapa',
	nextText: 'P�rpara&#x3E;',
	currentText: 'sot',
	monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
	'Korrik','Gusht','Shtator','Tetor','N�ntor','Dhjetor'],
	monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
	'Kor','Gus','Sht','Tet','N�n','Dhj'],
	dayNames: ['E Diel','E H�n�','E Mart�','E M�rkur�','E Enjte','E Premte','E Shtune'],
	dayNamesShort: ['Di','H�','Ma','M�','En','Pr','Sh'],
	dayNamesMin: ['Di','H�','Ma','M�','En','Pr','Sh'],
	weekHeader: 'Ja',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sq']);

var i18nDatepickerSq = datepicker.regional['sq'];


/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimic. */


datepicker.regional['sr-SR'] = {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
	'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Avg','Sep','Okt','Nov','Dec'],
	dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Cetvrtak','Petak','Subota'],
	dayNamesShort: ['Ned','Pon','Uto','Sre','Cet','Pet','Sub'],
	dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
	weekHeader: 'Sed',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sr-SR']);

var i18nDatepickerSrSr = datepicker.regional['sr-SR'];


/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimic. */


datepicker.regional['sr'] = {
	closeText: '???????',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: '?????',
	monthNames: ['??????','???????','????','?????','???','???',
	'???','??????','?????????','???????','????????','????????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['??????','?????????','??????','?????','????????','?????','??????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sr']);

var i18nDatepickerSr = datepicker.regional['sr'];


/* Swedish initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */


datepicker.regional['sv'] = {
	closeText: 'St�ng',
	prevText: '&#xAB;F�rra',
	nextText: 'N�sta&#xBB;',
	currentText: 'Idag',
	monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
	'Juli','Augusti','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dayNamesShort: ['S�n','M�n','Tis','Ons','Tor','Fre','L�r'],
	dayNames: ['S�ndag','M�ndag','Tisdag','Onsdag','Torsdag','Fredag','L�rdag'],
	dayNamesMin: ['S�','M�','Ti','On','To','Fr','L�'],
	weekHeader: 'Ve',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sv']);

var i18nDatepickerSv = datepicker.regional['sv'];


/* Tamil (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by S A Sureshkumar (saskumar@live.com). */


datepicker.regional['ta'] = {
	closeText: '????',
	prevText: '?????????',
	nextText: '????????',
	currentText: '?????',
	monthNames: ['??','????','???????','????????','??????','???',
	'???','????','?????????','??????','??????????','???????'],
	monthNamesShort: ['??','????','???','????','????','???',
	'???','??','???','???','????','????'],
	dayNames: ['???????????????','????????????','???????????????','??????????','????????????','?????????????','??????????'],
	dayNamesShort: ['??????','???????','????????','?????','???????','??????','???'],
	dayNamesMin: ['??','??','??','??','??','??','?'],
	weekHeader: '??',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['ta']);

var i18nDatepickerTa = datepicker.regional['ta'];


/* Thai initialisation for the jQuery UI date picker plugin. */
/* Written by pipo (pipo@sixhead.com). */


datepicker.regional['th'] = {
	closeText: '???',
	prevText: '&#xAB;&#xA0;????',
	nextText: '?????&#xA0;&#xBB;',
	currentText: '??????',
	monthNames: ['??????','??????????','??????','??????','???????','????????',
	'???????','???????','???????','??????','?????????','???????'],
	monthNamesShort: ['?.?.','?.?.','??.?.','??.?.','?.?.','??.?.',
	'?.?.','?.?.','?.?.','?.?.','?.?.','?.?.'],
	dayNames: ['???????','??????','??????','???','????????','?????','?????'],
	dayNamesShort: ['??.','?.','?.','?.','??.','?.','?.'],
	dayNamesMin: ['??.','?.','?.','?.','??.','?.','?.'],
	weekHeader: 'Wk',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['th']);

var i18nDatepickerTh = datepicker.regional['th'];


/* Tajiki (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */


datepicker.regional['tj'] = {
	closeText: '?????',
	prevText: '&#x3c;????',
	nextText: '???&#x3e;',
	currentText: '?????',
	monthNames: ['?????','??????','????','?????','???','???',
	'???','??????','???????','??????','?????','??????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['???????','???????','???????','????????','?????????','?????','?????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '??',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['tj']);

var i18nDatepickerTj = datepicker.regional['tj'];


/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */


datepicker.regional['tr'] = {
	closeText: 'kapat',
	prevText: '&#x3C;geri',
	nextText: 'ileri&#x3e',
	currentText: 'bug�n',
	monthNames: ['Ocak','Subat','Mart','Nisan','Mayis','Haziran',
	'Temmuz','Agustos','Eyl�l','Ekim','Kasim','Aralik'],
	monthNamesShort: ['Oca','Sub','Mar','Nis','May','Haz',
	'Tem','Agu','Eyl','Eki','Kas','Ara'],
	dayNames: ['Pazar','Pazartesi','Sali','�arsamba','Persembe','Cuma','Cumartesi'],
	dayNamesShort: ['Pz','Pt','Sa','�a','Pe','Cu','Ct'],
	dayNamesMin: ['Pz','Pt','Sa','�a','Pe','Cu','Ct'],
	weekHeader: 'Hf',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['tr']);

var i18nDatepickerTr = datepicker.regional['tr'];


/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */


datepicker.regional['uk'] = {
	closeText: '???????',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: '????????',
	monthNames: ['??????','?????','????????','???????','???????','???????',
	'??????','???????','????????','???????','????????','???????'],
	monthNamesShort: ['???','???','???','???','???','???',
	'???','???','???','???','???','???'],
	dayNames: ['??????','?????????','????????','??????','??????','?�??????','??????'],
	dayNamesShort: ['???','???','???','???','???','???','???'],
	dayNamesMin: ['??','??','??','??','??','??','??'],
	weekHeader: '???',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['uk']);

var i18nDatepickerUk = datepicker.regional['uk'];


/* Vietnamese initialisation for the jQuery UI date picker plugin. */
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */


datepicker.regional['vi'] = {
	closeText: '��ng',
	prevText: '&#x3C;Tru?c',
	nextText: 'Ti?p&#x3E;',
	currentText: 'H�m nay',
	monthNames: ['Th�ng M?t', 'Th�ng Hai', 'Th�ng Ba', 'Th�ng Tu', 'Th�ng Nam', 'Th�ng S�u',
	'Th�ng B?y', 'Th�ng T�m', 'Th�ng Ch�n', 'Th�ng Mu?i', 'Th�ng Mu?i M?t', 'Th�ng Mu?i Hai'],
	monthNamesShort: ['Th�ng 1', 'Th�ng 2', 'Th�ng 3', 'Th�ng 4', 'Th�ng 5', 'Th�ng 6',
	'Th�ng 7', 'Th�ng 8', 'Th�ng 9', 'Th�ng 10', 'Th�ng 11', 'Th�ng 12'],
	dayNames: ['Ch? Nh?t', 'Th? Hai', 'Th? Ba', 'Th? Tu', 'Th? Nam', 'Th? S�u', 'Th? B?y'],
	dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
	dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
	weekHeader: 'Tu',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['vi']);

var i18nDatepickerVi = datepicker.regional['vi'];


/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */


datepicker.regional['zh-CN'] = {
	closeText: '??',
	prevText: '&#x3C;??',
	nextText: '??&#x3E;',
	currentText: '??',
	monthNames: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	monthNamesShort: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	dayNames: ['???','???','???','???','???','???','???'],
	dayNamesShort: ['??','??','??','??','??','??','??'],
	dayNamesMin: ['?','?','?','?','?','?','?'],
	weekHeader: '?',
	dateFormat: 'yy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '?'};
datepicker.setDefaults(datepicker.regional['zh-CN']);

var i18nDatepickerZhCn = datepicker.regional['zh-CN'];


/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by SCCY (samuelcychan@gmail.com). */


datepicker.regional['zh-HK'] = {
	closeText: '??',
	prevText: '&#x3C;??',
	nextText: '??&#x3E;',
	currentText: '??',
	monthNames: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	monthNamesShort: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	dayNames: ['???','???','???','???','???','???','???'],
	dayNamesShort: ['??','??','??','??','??','??','??'],
	dayNamesMin: ['?','?','?','?','?','?','?'],
	weekHeader: '?',
	dateFormat: 'dd-mm-yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '?'};
datepicker.setDefaults(datepicker.regional['zh-HK']);

var i18nDatepickerZhHk = datepicker.regional['zh-HK'];


/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */


datepicker.regional['zh-TW'] = {
	closeText: '??',
	prevText: '&#x3C;??',
	nextText: '??&#x3E;',
	currentText: '??',
	monthNames: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	monthNamesShort: ['??','??','??','??','??','??',
	'??','??','??','??','???','???'],
	dayNames: ['???','???','???','???','???','???','???'],
	dayNamesShort: ['??','??','??','??','??','??','??'],
	dayNamesMin: ['?','?','?','?','?','?','?'],
	weekHeader: '?',
	dateFormat: 'yy/mm/dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '?'};
datepicker.setDefaults(datepicker.regional['zh-TW']);

var i18nDatepickerZhTw = datepicker.regional['zh-TW'];



}));