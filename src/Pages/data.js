import universalImage from "./Images/autotest.jpg"
import img712 from "./Images/71-2.jpg";
import img713 from "./Images/71-3.jpg";
import img714 from "./Images/71-4.jpg";
import img716 from "./Images/71-6.jpg";
import img719 from "./Images/71-9.jpg";
import img7110 from "./Images/71-10.jpg";
import img721 from "./Images/72-1.jpg";
import img726 from "./Images/72-6.jpg";
import img727 from "./Images/72-7.jpg";
import img729 from "./Images/72-9.jpg";
import img732 from "./Images/73-2.jpg";
import img733 from "./Images/73-3.jpg";
import img734 from "./Images/73-4.jpg";
import img736 from "./Images/73-6.jpg";
import img737 from "./Images/73-7.jpg";
import img739 from "./Images/73-9.jpg";
import img7310 from "./Images/73-10.jpg";
import img742 from "./Images/74-2.jpg";
import img744 from "./Images/74-4.jpg";
import img747 from "./Images/74-7.jpg";
import img748 from "./Images/74-8.jpg";
import img755 from "./Images/75-5.jpg";
import img756 from "./Images/75-6.jpg";
import img758 from "./Images/75-8.jpg";
import img759 from "./Images/75-9.jpg";
import img764 from "./Images/76-4.jpg";
import img766 from "./Images/76-6.jpg";
import img768 from "./Images/76-8.jpg";
import img773 from "./Images/77-3.jpg";
import img779 from "./Images/77-9.jpg";
import img7710 from "./Images/77-10.jpg";
import img782 from "./Images/78-2.jpg";
import img784 from "./Images/78-4.jpg";
import img785 from "./Images/78-5.jpg";
import img786 from "./Images/78-6.jpg";
import img787 from "./Images/78-7.jpg";
import img793 from "./Images/79-3.jpg";
import img797 from "./Images/79-7.jpg";
import img799 from "./Images/79-9.jpg";
import img801 from "./Images/80-1.jpg";
import img806 from "./Images/80-6.jpg";
import img807 from "./Images/80-7.jpg";
import img809 from "./Images/80-9.jpg";
import img8010 from "./Images/80-10.jpg";











const autoQuestions = [
    {
        bilet:0,
        questions: [
            {
                id:1,
                img:universalImage,
                question:"Svetaforning yashil miltillovchi ishora nimani bildiradi?",
                answers: [
                    "Harakatlanishga ruxsat beradi va tez orada taqiqlovchi ishora yonishi haqida axborot beradi",
                    "Harakatlanishni davom ettirishni taqiqlaydi",
                    "Svetafor nosozligini bildiradi",
                ],
                trueAnswer: "Harakatlanishga ruxsat beradi va tez orada taqiqlovchi ishora yonishi haqida axborot beradi"
            },
            {
                id:2,
                img:universalImage,
                question:" Ushbu joyda avtomobilni to'xtab turish uchun qo'yishga ruxsat etiladimi?",
                answers: [
                    "Ha",
                    "Yo'q",
                ],
                trueAnswer: "Ha"
            }
        ]
    },
/* bilet 1 */
    {
        bilet:1,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Svetaforning yashil miltillovchi ishora nimani bildiradi?`,
                answers: [
                    `Harakatlanishga ruxsat beradi va tez orada taqiqlovchi ishora yonishi haqida axborot beradi`,
                    `Harakatlanishni davom ettirishni taqiqlaydi`,
                    `Svetafor nosozligini bildiradi`,
                ],
                trueAnswer: `Harakatlanishga ruxsat beradi va tez orada taqiqlovchi ishora yonishi haqida axborot beradi`
            },
            {
                id:2,
                img:img712,
                question:`Ushbu joyda avtomobilni to'xtab turish uchun qo'yishga ruxsat etiladimi?`,
                answers: [
                    `Ha`,
                    `Yo'q`,
                ],
                trueAnswer: `Ha`
            },
            {
                id:3,
                img:img713,
                question:`Ushbu chorrahada to'g'riga o'tmoqchisiz. Ushbu vaziyatda sizning harakatingiz?`,
                answers: [
                    `Qizil avtomobil yo'l berayotganiga ishonch hosil qilib, chorrahadan birinchi o'tish`,
                    `Chorrahaga birinchi kirgan qizil avtomobilga yo'l berish`,
                ],
                trueAnswer: `Qizil avtomobil yo'l berayotganiga ishonch hosil qilib, chorrahadan birinchi o'tish`
            },
            {
                id:4,
                img:img714,
                question:`Ushbu yo'l nechta harakatlanish bo'lagiga ega?`,
                answers: [
                    `3`,
                    `1`,
                    `2`,
                ],
                trueAnswer: `2`
            },
            {
                id:5,
                img:universalImage,
                question:`Qaysi hollarda yo'lning harakatlanish bo'lagini ajratuvchi uzuq-uzuq chiziqni bosib o'tish mumkin?`,
                answers: [
                    `Faqat qayta tizilishda`,
                    `Barcha sanab o'tilgan hollarda`,
                    `Yo'lda boshqa transport vositalari bo'lmasa`,
                ],
                trueAnswer: `Faqat qayta tizilishda`
            },
            {
                id:6,
                img:img716,
                question:`Ushbu belgilardan qaysi biri bir tomonlama harakat tashki qilingan yo'lning boshida o'rnatiladi?`,
                answers: [
                    `Faqat "A"`,
                    `"B" yoki "V"`,
                    `Faqat "B"`,
                    `"B" yoki "G"`
                ],
                trueAnswer: `Faqat "B"`
            },
            {
                id:7,
                img:universalImage,
                question:`Sanab o'tilgan qaysi hollarda egiluvchan ulagichda shatakka olish taqiqlanadi?`,
                answers: [
                    `Yo'l yaxmalak va sirpanchiq bo'lgan hollarda`,
                    `Barcha sanab o'tilgan hollarda`,
                    `Kunning qorong'u vaqtida va yetarli ko'rnimaslik sharoitida`,
                    `Faqat to'g'ri yo'llarda`
                ],
                trueAnswer: `Yo'l yaxmalak va sirpanchiq bo'lgan hollarda`
            },
            {
                id:8,
                img:universalImage,
                question:`Yo'lda "TO'XTASH" yozuvi ko'rinishidagi yo'l chizig'i nimani bildiradi?`,
                answers: [
                    `Tartibga solingan chorrahada to'xtash chizig'iga yaqinlashayotganini bildiradi`,
                    `"To'xtash chizig'i" va "To'xtamasdan harakatlanish taqiqlanadi" yo'l belgisi o'rnatilgan yo'l qismiga yaqinlashayotganini`,
                    `"Yo'l bering"  belgisiga yaqinlashayotganini bildiradi`
                  
                ],
                trueAnswer: `"To'xtash chizig'i" va "To'xtamasdan harakatlanish taqiqlanadi" yo'l belgisi o'rnatilgan yo'l qismiga yaqinlashayotganini`
            },
            {
                id:9,
                img:img719,
                question:`Siz chorrahada chapga burilmoqchisiz. Ushbu vaziyatda kimga yo'l berasiz?`,
                answers: [
                    `Hech kimga`,
                    `Faqat aftobusga`,
                    `Faqat qizil avtomobilga`
                  
                ],
                trueAnswer: `Hech kimga`
            },
            {
                id:10,
                img:img7110,
                question:`Ushbu ko'rsatilgan holatda motosikl haydovchisi sizga yo'l berishi kerakmi?`,
                answers: [
                    `Yo'q`,
                    `Ha`
                ],
                trueAnswer: `Ha`
            },
        ]
    },
/* bilet 2 */
    {
        bilet:2,
        questions: [
            {
                id:1,
                img:img721,
                question:"Ko`rsatilgan yo`l belgilaridan qaysi biri faqat yo`l qoplamasi nam bo`lganda ta`sir etadi?",
                answers: [
                    `Faqat "A"`,
                    `Faqat "A" va "B"`,
                    "Barchasi"
                ],
                trueAnswer: `Faqat "A"`
            },
            {
                id:2,
                img:universalImage,
                question:`Sanab o'tilgan qaysi holatda transport vositasidan foydalanishga ruxsat etiladi?`,
                answers: [
                    `Tashqi yoritish asboblari ifloslangan bo'lsa`,
                    `Old qismida oq yoki rangli tumanga qarshi faralar o'rnatilgan bo'lsa`,
                    `Yorituvchi chiroq nurining yo'nalishi buzilgan bo'lsa`
                ],
                trueAnswer: `Old qismida oq yoki rangli tumanga qarshi faralar o'rnatilgan bo'lsa`
            },
            {
                id:3,
                img:universalImage,
                question:`Turar joy dahalarida qanday harakatlar taqiqlangan?`,
                answers: [
                    `Faqat dvigatel to'xtab turgan holatda ushlab turish`,
                    `Barcha sanab o'tilgan hollarda`,
                    `Faqat o'quv mashg'ulotlarini o'tkazish`
                ],
                trueAnswer: `Barcha sanab o'tilgan hollarda`
            },
            {
                id:4,
                img:universalImage,
                question:`Chorrahaga kirganingizda tartibga soluvchi qo'lini yuqoriga ko'tardi, sizga harakatlanishga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Ruxsat etilmaydi`,
                    `Ruxsat etiladi, faqat o'ngga burilayotgan bo'lsa`
                ],
                trueAnswer: `Ruxsat etiladi`
            },
            {
                id:5,
                img:universalImage,
                question:`Qanday hollarda aholi punktlarida tovush moslamalaridan foydalanishga ruxsat etiladi?`,
                answers: [
                    `Yo'l transport hodisasining oldini olish uchun`,
                    `Quvib o'tishda ogohlantirish uchun`,
                    `Sanab o'tilgan har ikki hollarda`
                ],
                trueAnswer: `Ruxsat etiladi`
            },
            {
                id:6,
                img:img726,
                question:`Yuk avtomobili haydovchisi to'xtab turish qoidasini buzdimi?`,
                answers: [
                    `Xato qilmadi`,
                    `Buzdi`,
                    `Buzmadi, agar uning ruxsat etilgan to'la vazni 3.5 tonnadan oshmasaa`
                ],
                trueAnswer: `Buzdi`
            },
            {
                id:7,
                img:img727,
                question:`Qaysi haydovchi to'xtab turish qoidalarini buzdi?`,
                answers: [
                    `Hech kim buzmadi`,
                    `Traturada to'xtab turgan avtomobil haydovchisi`,
                    `Motosikl haydovchisi`
                ],
                trueAnswer: `Traturada to'xtab turgan avtomobil haydovchisi`
            },
            {
                id:8,
                img:universalImage,
                question:`Transport vositalari qattiq ulagichda shatakka olinganda shatakka olgan va olingan transport vositalari orasidagi masofa qancha bo'lishi kerak?`,
                answers: [
                    `4 metrdan 6 metrgacha`,
                    `4 metrdan oshmasligi`,
                    `Qoidalarda belgilanmagan`
                ],
                trueAnswer: `4 metrdan oshmasligi`
            },
            {
                id:9,
                img:img729,
                question:`Ko'rsatilgan qaysi belgi sizga yashash manzilingizga avtomobilda o'tishga ruxsat beradi?`,
                answers: [
                    `Faqat "A"`,
                    `Faqat "A" va "B"`,
                    `Barchasi`,
                    `Faqat "B"`,
                ],
                trueAnswer: `Faqat "A" va "B"`
            },
            {
                id:10,
                img:universalImage,
                question:`Yo'lning sirpanchiq qismida rul chambaragini keskin burganda hosil bo'ladigan sirpannishning oldini olish uchun haydovchi qanday ehtiyot choralarini ko'rishi kerak?`,
                answers: [
                    `Rul chambaragini zudlik bilan sirpanayotgan tomonga burish va tezda harakatlanish yo'nalishini to'g'rilash`,
                    `To'rmoz tepkisini bosish`,
                    `Ilashmani uzish`
                ],
                trueAnswer: `Rul chambaragini zudlik bilan sirpanayotgan tomonga burish va tezda harakatlanish yo'nalishini to'g'rilash`
            }
        ]
    },
/* Bilet 3 */
    {
        bilet:3,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Tumanga qarshi chiroqlar va orqa tumanga qarshi chiroqlar birga yoqilishi mumkin?`,
                answers: [
                    `Faqat yetarli ko'rinmaslik sharoitida`,
                    `Cheklangan ko'rinish sharoitida`
                ],
                trueAnswer: `Faqat yetarli ko'rinmaslik sharoitida`
            },
            {
                id:2,
                img:img732,
                question:`Ko'rsatilgan belgilardan qaysi biri yo'lning ko'rinish masofaso cheklangan joylarida majburan to'xtagan transport vositalarini belgilash uchun qo'llaniladi?`,
                answers: [
                    `Faqat "B"`,
                    `Faqat "V"`,
                    `Faqat "A"`
                ],
                trueAnswer: `Faqat "A"`
            },
            {
                id:3,
                img:img733,
                question:`Ushbu ko'rsatilgan vaziyatda sizga hovliga orqa bilan kirib qayrilib olishga ruxsat beriladimi?`,
                answers: [
                    `Ruxsat beriladi agarda bunda harakatning boshqa ishtirokchilariga halaqit bermasa`,
                    `Taqiqlanadi`,
                    `Har qanday holatda ruxsat etiladi`
                ],
                trueAnswer: `Barcha sanab o'tilgan hollarda`
            },
            {
                id:4,
                img:img734,
                question:` Ushbu yo'l belgisi chrrahaga yaqinlashayotganlik to'g'risida ogohlantiradi, bunda siz:`,
                answers: [
                    `Birinchi bo'lib harakarlanish huquqiga egasiz`,
                    `Kesib o'tayotgan yo'ldagi transport vositalariga yo'l berishingiz kerak`,
                    `Faqatgina o'ngdan yaqinlashib kelayotgan transport vositalariga yo'l berishing kerak`
                ],
                trueAnswer: `Faqatgina o'ngdan yaqinlashib kelayotgan transport vositalariga yo'l berishing kerak`
            },
            {
                id:5,
                img:universalImage,
                question:` Haydovchi transport vositasini boshqarish vaqtida telefondan foydalanishga ruxsat etiladimi?`,
                answers: [
                    `20km/s tezlikda harakat qilayotganda ruxsat etiladi`,
                    `Ruxsat etiladi`,
                    `Qo'lni ishlatmasdan, tehnik vositalaridan foydalanib harakatlanishga ruxsat etiladi`
                ],
                trueAnswer: `Qo'lni ishlatmasdan, tehnik vositalaridan foydalanib harakatlanishga ruxsat etiladi`
            },
            {
                id:6,
                img:img736,
                question:`Haydovchi chapga burilishda qaysi yo'nalish bo'yicha qoidani buzmoqda?`,
                answers: [
                    `Faqat "A" yo'nalish bo'yicha`,
                    `Faqat "B" yo'nalish bo'yicha`,
                    `Ko'rsatilgan barcha yo'naishlar bo'yicha`
                ],
                trueAnswer: `Ko'rsatilgan barcha yo'naishlar bo'yicha`
            },
            {
                id:7,
                img:img737,
                question:`Shatakka olib harakatlanishingiz mumkin`,
                answers: [
                    `Faqat "A" yo'nalish bo'yicha`,
                    `Faqat "B" yo'nalish bo'yicha`,
                    `Ko'rsatilgan barcha yo'naishlar bo'yicha`
                ],
                trueAnswer: `Faqat "A" yo'nalish bo'yicha`
            },
            {
                id:8,
                img:universalImage,
                question:`Agar avtomobil antiblokirovkali (ABS) tormoz tizimi bilan jihozlangan bo'lsa keskin tormoz berishni qanday amalga oshirishi kerak?`,
                answers: [
                    `To'rmoz tepkisini uzub-uzib bosish yo'li bilan`,
                    `To'rmoz tepkisini oxirigacha bosish va avtomobil to'la to'xtaguncha qo'yib yubormaslik`,
                    `To'xtab turish to'rmoz tizimini qo'llash usuli bilan`
                ],
                trueAnswer: `To'rmoz tepkisini oxirigacha bosish va avtomobil to'la to'xtaguncha qo'yib yubormaslik`
            },
            {
                id:9,
                img:img739,
                question:`Yo'l harakati qoidalari bo'yicha "yonlama oraliq masofa" ni ko'rsating:`,
                answers: [
                    `"A" va "V"`,
                    `Faqat "V"`,
                    `Faqat "A"`,
                    `Faqat "B"`,
                ],
                trueAnswer: `"A" va "V"`
            },
            {
                id:10,
                img:img7310,
                question:`Ko'rsatilgan qaysi belgi reversiv harakat boshlanishi haqida axborot beradi?`,
                answers: [
                    `"B"`,
                    `"V"`,
                    `"A"`
                ],
                trueAnswer: `"V"`
            }
        ]
    },
/* Bilet 4 */
    {
        bilet:4,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Kunning yorug' vaqtida aholi punktlarida quvib o'tilayotgan transport vositasi haydovchisining e'tiborini jalb qilish uchun mumkin:`,
                answers: [
                    `Sanab o'tilgan barchasidan foydalanish`,
                    `Faqat birgalikda yorug'lik ishoralari bilan tovush signallarini qo'llash`,
                    `Tovush signallaridan foydalanish`,
                    `Faqat yaqinni yorituvchi chiroqni uzoqni yorituvchi chiroqqa qisqa muddat orasida o'tkazish bilan`

                ],
                trueAnswer: `Faqat yaqinni yorituvchi chiroqni uzoqni yorituvchi chiroqqa qisqa muddat orasida o'tkazish bilan`
            },
            {
                id:2,
                img:img742,
                question:`Ushbu yo'l chizig'i sizga qanday manyovr bajarishni taqiqlaydi?`,
                answers: [
                    `Quvib o'tishni`,
                    `Qayrilib olishni`,
                    `Sanab o'tilgan barcha manyoverlarga ruxsat beradi`,
                    `Aylanib o'tishni`,
                ],
                trueAnswer: `Sanab o'tilgan barcha manyoverlarga ruxsat beradi`
            },
            {
                id:3,
                img:universalImage,
                question:`72 km/s tezlikda harakatlanayotgan avtomobil 1 sekundda qancha masofani bosib o'tadi?`,
                answers: [
                    `20`,
                    `25`,
                    `15`
                ],
                trueAnswer: `20`
            },
            {
                id:4,
                img:img744,
                question:`Ushbu belgi axborot beradi:`,
                answers: [
                    `Reversiv harakatlanish yo'liga chiqish haqida`,
                    `Chorrahadan o'ngga va chapga bir tomonlama harakat tashkil qilingan`,
                    `Siz o'ngga yoki chapga burilishingiz keraklini ko'rsatadi`
                ],
                trueAnswer: `Reversiv harakatlanish yo'liga chiqish haqida`
            },
            {
                id:5,
                img:universalImage,
                question:`Qaysi hollarda transport vositalaridan foydalanish taqiqlanadi?`,
                answers: [
                    `Dvidatel qiyinchilik bilan ishga tushadi`,
                    `O't oldirish tizimi nosoz`,
                    `Yonilg'i darajasini ko'rsatish qurilmasi ishlamaydi`,
                    `Tovush signallari ishlamaydi`
                ],
                trueAnswer: `Tovush signallari ishlamaydi`
            },
            {
                id:6,
                img:universalImage,
                question:`M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?`,
                answers: [
                    `25`,
                    `20`,
                    `10`
                ],
                trueAnswer: `20`
            },
            {
                id:7,
                img:img747,
                question:`Sizga ruxsat etilgan to'la vazni 3,5 tonnadan ortiq yuk avtomobilida harakatlanish:`,
                answers: [
                    `To'g'riga va o'nga`,
                    `Barcha yo'nalishlarda`,
                    `Faqat to'g'riga`
                ],
                trueAnswer: `Faqat to'g'riga`
            },
            {
                id:8,
                img:img748,
                question:`Qaysi yo'nalishda harakatlanishni davom ettirishingiz mumkin?`,
                answers: [
                    `O'ngga, chapga va qayrilib olishga`,
                    `Faqat chapga`,
                    `Chapga va qayrilib olishga`
                ],
                trueAnswer: `O'ngga, chapga va qayrilib olishga`
            },
            {
                id:9,
                img:universalImage,
                question:`Svetafor ishoralari qysi guruh yo'l belgilarini bekor qiladi(miltillovchi sariq ishoradan tashqari)?`,
                answers: [
                    `Imtiyoz`,
                    `Taqiqlovchi`,
                    `Buyuruvchi`,
                    `Barcha sanab o'tilgan`,
                ],
                trueAnswer: `Imtiyoz`
            },
            {
                id:10,
                img:universalImage,
                question:`108km/s tezlikda harakatlanayotgan avtomobil 1 sekundda qancha masofani bosib o'tadi?`,
                answers: [
                    `15m`,
                    `20m`,
                    `30m`
                ],
                trueAnswer: `30m`
            }
        ]
    },
/* Bilet 5 */
    {
        bilet:5,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Quvib o'tishni bajarayotganda chapga burilishni ko'rsatuvchi chiroqni qachon o'chirishingiz kerak?`,
                answers: [
                    `Quvib o'tilayotgan transport vositasidan o'zib ketgandan keyin istalgan paytda`,
                    `Manyovrni tugallagach darhol`,
                    `O'z ixtiyoringizga ko'ra`
                ],
                trueAnswer: `Manyovrni tugallagach darhol`
            },
            {
                id:2,
                img:universalImage,
                question:`Qanday alomatlar chachash belgilari hisoblanadi?`,
                answers: [
                    `Uyquchanlik, bo'shanish, diqqatning susayishi`,
                    `Zo'riqish, asabiylashish`,
                    `Bosh aylanishi, ko'zlariga qum kirgan kabi achishish, telash alomati `
                ],
                trueAnswer: `Uyquchanlik, bo'shanish, diqqatning susayishi`
            },
            {
                id:3,
                img:universalImage,
                question:`Piyodalar turar joy dahasida qayerda harakatlanishlari mumkin?`,
                answers: [
                    `Faqat qatnov qismida`,
                    `Faqat tratuarda`,
                    `Tratuarda hamda qatnov qismida`
                ],
                trueAnswer: `Tratuarda hamda qatnov qismida`
            },
            {
                id:4,
                img:universalImage,
                question:`Kunning yorug' vaqtida quyidagi hollarda yaqinni yorituvchi chiroqlar yoqilishi kerak:`,
                answers: [
                    `Yo'lovchilarni tashiyotgan aftobus va yo'nalishli transport vositalarida`,
                    `Motosikl va Mopedlarda`,
                    `Xafli, katta o'lchamli va og'ir vaznli yuklarni tashishda`,
                    `Barcha sanab o'tilgan xollarda`

                ],
                trueAnswer: `Barcha sanab o'tilgan xollarda`
            },
            {
                id:5,
                img:img755,
                question:`Qaysi yo'l belgisi chapga burilishni taqiqlaydi?`,
                answers: [
                    `Faqat "A" va "B"`,
                    `Barchasi`,
                    `Faqat "A"`,
                    `Faqat "A" va "G"`
                ],
                trueAnswer: `Faqat "A" va "G"`
            },
            {
                id:6,
                img:img756,
                question:`Chorrahadagi uzuq-uzuq chiziqlar nimani bildiradi?`,
                answers: [
                    `Chorrahada harakatlanish bo'lagi chegarasini`,
                    `Majburiy harakatlanish`
                ],
                trueAnswer: `Chorrahada harakatlanish bo'lagi chegarasini`
            },
            {
                id:7,
                img:universalImage,
                question:` Siz yengil avtomobildan qaysi jihozlar mavjud bo'lmaganda foydalanishingiz mumkin?`,
                answers: [
                    `O't o'chirgich`,
                    `G'ildirab ketishga moslama`,
                    `Tibbiy quticha`,
                    `Falokat sabab to'xtash belgisi`
                ],
                trueAnswer: `G'ildirab ketishga moslama`
            },
            {
                id:8,
                img:img758,
                question:`Qaysi transport vositasining haydovchisi qoidani buzib burilmoqda?`,
                answers: [
                    `Faqat yengil avtomobil haydovchisi`,
                    `Ikkisi ham buzmoqda`,
                    `Faqat motosikl haydovchisi`
                ],
                trueAnswer: `Ikkisi ham buzmoqda`
            },
            {
                id:9,
                img:img759,
                question:`Ushbu yo'lda sizga yo'l belgisidan keyin qaysi bo'laklarda harakatlanishga ruxsat beriladi?`,
                answers: [
                    `Istalgan bo'lakdan`,
                    `O'ng bo'lakdan`,
                    `Faqat chap bo'lakdan`
                ],
                trueAnswer: `O'ng bo'lakdan`
            },
            {
                id:10,
                img:universalImage,
                question:`Yo'l transport hodisasiga daxldor haydovchilar birinchi navbatda nima qilishlari kerak?`,
                answers: [
                    `Sodir etilgan YTH haqida YHXX ga xabar berishi kerak`,
                    `Yo'lning harakat qismini bo'shatishlari kerak`,
                    `Transport vositasini darhol to'xtatishi va avariya ishoralarini yoqishi va avariya sabab to'xtash ishoralarini yoqishi`
                ],
                trueAnswer: `Transport vositasini darhol to'xtatishi va avariya ishoralarini yoqishi va avariya sabab to'xtash ishoralarini yoqishi`
            }
        ]
    },
/* Bilet 6 */
    {
        bilet:6,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Qaysi hollarda sizga harakatni davom ettirish taqiqlanadi, hatto ta'mirlash ustaxonasiga ham, agarda faralar va orqa gabarit chiroqlar nosoz bo'lsa:`,
                answers: [
                    `Ikkala sanab o'tilgan holda`,
                    `Faqat yetarli ko'rinmaslik sharoitida`,
                    `Kunning qorong'u vaqtida`
                ],
                trueAnswer: `Ikkala sanab o'tilgan holda`
            },
            {
                id:2,
                img:universalImage,
                question:`Birinchi uzatmada uzoq tezlanishda yurish yoqilg'i sarfiga qanday ta'sir etadi?`,
                answers: [
                    `Yoqilg'i sarfi kamayadi`,
                    `Yoqilg'i sarfi o'zgarmaydi`,
                    `Yoqilg'i sarfi ortadi`
                ],
                trueAnswer: `Yoqilg'i sarfi ortadi`
            },
            {
                id:3,
                img:universalImage,
                question:`Kunning yorug' vaqtida aholi punktlaridan tashqarida siz quvib o'tayotgan transport vositasi haydovchisining e'tiborini qanday jalb qilasiz?`,
                answers: [
                    `Faqat tovush ishorasi bilan`,
                    `Faqat yorug'lik ishoralarini qisqa-qisqa yoqib o'chirish bilan`,
                    `Sanab o'tilgan barcha usullar bilan va ularni birga qo'llash bilan`
                ],
                trueAnswer: `Sanab o'tilgan barcha usullar bilan va ularni birga qo'llash bilan`
            },
            {
                id:4,
                img:img764,
                question:`Kunning yorug' vaqtida quyidagi hollarda yaqinni yorituvchi chiroqlar yoqilishi kerak:`,
                answers: [
                    `Faqat "A"`,
                    `Faqat "B"`,
                    `"B" va  "V"`
                ],
                trueAnswer: `"B" va  "V"`
            },
            {
                id:5,
                img:universalImage,
                question:` Kunning qorong'i vaqtida aholi punktlarida yo'lning yoritilgan qismida siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?`,
                answers: [
                    `Yaqinni yoki uzoqni yorituvchi chiroqlardan`,
                    `Gabarit chiroqlarda`,
                    `Yaqinni yorituvchi chiroqlardan`
                ],
                trueAnswer: `Yaqinni yorituvchi chiroqlardan`
            },
            {
                id:6,
                img:img766,
                question:`Qaysi belgilarda qarama-qarshi harakatlanishda o'tib ketish qiyin bo'lsa, siz yo'l berishingiz kerak?`,
                answers: [
                    `"B" va "V"`,
                    `"A" va "V"`,
                    `Faqat  "V"`,
                    `"B" va "G"`
                ],
                trueAnswer: `"A" va "V"`
            },
            {
                id:7,
                img:universalImage,
                question:`Qanday hollarda yo'lning burilish qismlarida yengil avtomobil ag'darilishga qarsh turg'unroq?`,
                answers: [
                    `Yo'lovchilar bilan va yuksiz`,
                    `Yo'lovchilarsiz va yuqori yukxonasida yuk bilan`,
                    `Yuksiz va yo'lovchilarsiz`
                ],
                trueAnswer: `Yuksiz va yo'lovchilarsiz`
            },
            {
                id:8,
                img:img768,
                question:`Qaysi yo'l belgisi piyodalar yo'lkasini bildiradi?`,
                answers: [
                    `Faqat "B"`,
                    `Faqat "B" va "V"`,
                    `Barchasi`
                ],
                trueAnswer: `Faqat "B"`
            },
            {
                id:9,
                img:universalImage,
                question:` Sanab o'tilgan qaysi transport vositalarini o't o'chirgichsiz tasarruf etishga ryxsat etiladi?`,
                answers: [
                    `Barcha motosikllarni`,
                    `Aftobuslarni`,
                    `Faqat yon kajavasiz motosikllarni`,
                    `Avtomobillarni`
                ],
                trueAnswer: `Barcha motosikllarni`
            },
            {
                id:10,
                img:universalImage,
                question:`Qaysi holatda siz majburiy to'xtashni amalga oshirasiz?`,
                answers: [
                    `Piyodalar o'tish oldida yo'l berish uchun to'xtaganda`,
                    `Texnik nosozlik tufayli yo'lning harakat qismida to'xtaganda`,
                    `Har ikki sanab o'tilgan holatda`
                ],
                trueAnswer: `Texnik nosozlik tufayli yo'lning harakat qismida to'xtaganda`
            }
        ]
    },
/* Bilet 7 */
    {
        bilet:7,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`"Quvib o'tish" atamasi nimani bildiradi?`,
                answers: [
                    `Egallab turgan harakatlanish bo'lagidan qarama-qarshi harakat bo'lagiga bir yoki bir nechta transport vositalaridan o'zib ketish`,
                    `Egallagan harakatlanish bo'lagidan chiqib oldinda harakatlanayotgan transport vositalaridan o'zib ketish`,
                    `Bir yoki bir nechta transport vositalaridan o'zib ketish`
                ],
                trueAnswer: `Egallagan harakatlanish bo'lagidan chiqib oldinda harakatlanayotgan transport vositalaridan o'zib ketish`
            },
            {
                id:2,
                img:universalImage,
                question:`Qattiq yoki egiluvchan ulagichda shatakka olgan yuk avtomobilining kabinasida odam tashishga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Taqiqlanadi`
                ],
                trueAnswer: `Ruxsat etiladi`
            },
            {
                id:3,
                img:img773,
                question:` Ko'rsatilgan yo'l belgilaridan qaysi biri ruxsat etilgan to'la vazni 3,5 tonnadan kam bo'lgan yuk avtomobiliga o'ngga harakatlanishni buyuradi?`,
                answers: [
                    `Faqat "B"`,
                    `"A" va "B"`,
                    `"B"va "V"`,
                    `Faqat "A"`
                ],
                trueAnswer: `Faqat "B"`
            },
            {
                id:4,
                img:universalImage,
                question:`Tormoz tizimiga ega bo'lmagan tirkama bilan harakatlanayotganda yengil avtomobilni tormoz yo'li qanday o'zgaradi?`,
                answers: [
                    `To'rmoz yo'li o'zgarmaydi`,
                    `To'rmoz yo'li uzayadi`,
                    `Tirkama qo'shimcha qarshilikka ega bo'lgani uchun to'rmoz yo'li kamayadi`
                ],
                trueAnswer: `To'rmoz yo'li uzayadi`
            },
            {
                id:5,
                img:universalImage,
                question:`Kunning qorong'i vaqtida va bulutli ob-havoda ro'paradan kelayotgan avtomobilni tezligi qanday tuyuladi?`,
                answers: [
                    `Aslidagidan kam tezlikda tuyuladi`,
                    `Tezlikni qabul qilish o'zgarmaydi`,
                    `Aslidagidan katta tezlikda tuyuladi`
                ],
                trueAnswer: `Aslidagidan kam tezlikda tuyuladi`
            },
            {
                id:6,
                img: universalImage,
                question:` Sanab o'tilgan qaysi hollarda haydovchi orqadagi vaziyatni e'tiborga olishi kerak?`,
                answers: [
                    `Faqat nam qoplama va yaxmalakli yo'llarda tormoz berganda`,
                    `Faqat keskin tormozlashda`,
                    `Har qanday tormozlashda`
                ],
                trueAnswer: `Har qanday tormozlashda`
            },
            {
                id:7,
                img:universalImage,
                question:`Yo'lning keskin burilishida yuzaga keladigan sirpanishning oldini olish uchub haydovchi nima qilishi kerak?`,
                answers: [
                    `Burilishdan oldin tezlikni kamaytirib, avtomobil erkin harakatlanishi uchun ilashma tepkisini bosish`,
                    `Burilishdan oldin tezlikni kamaytirib, kerak bo'lsa pog'onasini kamaytirib`,
                    `Sanab o'tilgan har ikki usulni qo'llash`
                ],
                trueAnswer: `Burilishdan oldin tezlikni kamaytirib, kerak bo'lsa pog'onasini kamaytirib`
            },
            {
                id:8,
                img:universalImage,
                question:`Tuman sharoitida, agar ko'rinish masofasi 300 metrdan kam bo'lsa kunduzgi chiroqlarni yoqish yetarlimi?`,
                answers: [
                    `Yetarli emas`,
                    `Yetarli`
                ],
                trueAnswer: `Yetarli emas`
            },
            {
                id:9,
                img:img779,
                question:`Qaysi yo'l belgisi barcha transport vositalarining harakatni istisnosiz taqiqlaydi?`,
                answers: [
                    `"B"`,
                    `"V"`,
                    `"A"`
                ],
                trueAnswer: `"B"`
            },
            {
                id:10,
                img:img7710,
                question:`Chorrahaga kirishda siz:`,
                answers: [
                    `Har ikkisiga ham yo'l berishingiz kerak`,
                    `Birinchi o'tish huquqiga egasiz`,
                    `Motosiklga yo'l berishingiz kerak`
                ],
                trueAnswer: `Har ikkisiga ham yo'l berishingiz kerak`
            }
        ]
    },
/* Bilet 8 */
    {
        bilet:8,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Yengil avtomobilning orqa oynasiga parda yoki chiypardalar o'rnatish mumkinmi?`,
                answers: [
                    `Ruxsat etiladi, agar ikki tomondagi orqani kuzatuvchi ko'zgusi bo'lsa`,
                    `Taqiqlanadi`
                ],
                trueAnswer: `Ruxsat etiladi, agar ikki tomondagi orqani kuzatuvchi ko'zgusi bo'lsa`
            },
            {
                id:2,
                img:img782,
                question:`Chorrahaning ko'rsatilgan joyida sizga to'xtashga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Taqiqlanadi`,
                    `Ruxsat etiladi, agarda sizning transport vositangiz bilan sidirg'a chiziq orasidagi masofa 3 metrdan ko'p bo'lsa`
                ],
                trueAnswer: `Taqiqlanadi`
            },
            {
                id:3,
                img:universalImage,
                question:`Avtomobilning  ABS tizimi burilishda sirpanish va yonga siljishni oldini oladimi?`,
                answers: [
                    `Avtomobilning sirpanish va yonga siljish ehtimolining oldini olmaydi`,
                    `Avtomobilning faqat yonga siljish ehtimolining oldini oladi`,
                    `Avtomobilning faqat sirpanish ehtimolining oldini oladi`
                ],
                trueAnswer: `Faqat "B"`
            },
            {
                id:4,
                img:img784,
                question:`Ko'rsatilgan qaysi joyda siz avtomobilni qoidaga binoan to'xtatishingiz mumkin?`,
                answers: [
                    `Faqat "B" va  "V"`,
                    `Hech qaysisida`,
                    `Faqat "B"`,
                    `Faqat "A"`

                ],
                trueAnswer: `Faqat "B"`
            },
            {
                id:5,
                img:img785,
                question:`Siz ro'paradan yaqinlashayotgan yuk avtomobiliga yo'l berishingiz kerakmi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Yo'q`
            },
            {
                id:6,
                img: img786,
                question:`Ko'k avtomobil chapga burilmoqchi. Kimga yo'l berishi kerak?`,
                answers: [
                    `Faqat aftobusga`,
                    `Har ikki transport vositasiga`,
                    `Faqat yuk avtomobiliga`
                ],
                trueAnswer: `Har ikki transport vositasiga`
            },
            {
                id:7,
                img:img787,
                question:` Ushbu holatda sizga temir yo'l kesishmasiga chiqishga ruxsat etiladimi?`,
                answers: [
                    `Taqiqlanadi`,
                    `Ha`,
                    `Ha, yaqinlashib kelayotgan poyezd yo'q bo'lsa`
                ],
                trueAnswer: `Taqiqlanadi`
            },
            {
                id:8,
                img:universalImage,
                question:`90 km/s tezlikda harakatlanayotgan avtomobil 1 sekundda qancha masofani bosib o'tadi?`,
                answers: [
                    `25m`,
                    `15m`,
                    `35m`,

                ],
                trueAnswer: `25m`
            },
            {
                id:9,
                img:universalImage,
                question:`Shatakka olingan avtomobilni falokat yorug'lik ishoralari nosoz bo'lganda transport vositasi qanday belgilanishi kerak?`,
                answers: [
                    `Gabarit chiroqlarni yoqish`,
                    `Shatakka olinga tranport vositasining orqa tomonidga falokat sabab to'xtash belgisini o'rnatish`,
                    `Orqa tomonga qarshi chiroqlarni yoqish`
                ],
                trueAnswer: `Shatakka olinga tranport vositasining orqa tomonidga falokat sabab to'xtash belgisini o'rnatish`
            },
            {
                id:10,
                img:universalImage,
                question:`Transport vositasi qiyalikda joyidan qo'zgalishda to'xtab turish tormoz dastagini qay vaqtda tushirishi kerak?`,
                answers: [
                    `Harakatni boshlash bilan bir vaqtda`,
                    `Harakatni boshlashdan oldin`,
                    `Harakatni boshlagandan so'ng`
                ],
                trueAnswer: `Harakatni boshlash bilan bir vaqtda`
            }
        ]
    },
/* Bilet 9 */
    {
        bilet:9,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Nosoz transport vositasini shatakka olgan yengil avtomobil salonida odam tashishga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Taqiqlanadi`
                ],
                trueAnswer: `Ruxsat etiladi`
            },
            {
                id:2,
                img:universalImage,
                question:`Uzoq davom etadigan keng ravon yo'lda avtomobilni yuqori tezlikda boshqarganda haydovchi tezlik qanday qabul qilinadi?`,
                answers: [
                    `Aslidagidan tez harakatlanayotganga o'xshaydi`,
                    `Aslidagidan sekin harakatlanayotganga o'xshaydi`,
                    `Tezlikni qabul qilish o'zgarmaydi`
                ],
                trueAnswer: `Aslidagidan sekin harakatlanayotganga o'xshaydi`
            },
            {
                id:3,
                img:img793,
                question:`Sizga ko'satilgan joyda yengil avtomobilda to'xtashga ruxsat etiladimi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Yo'q`
            },
            {
                id:4,
                img:universalImage,
                question:`Yo'lning qanday qismida harakatlanganda kuchli yonlama shamol xavfi ortadi?`,
                answers: [
                    `Ochiq joyda harakat qilganda`,
                    `Yo'lning yopiq qismidan ochiq qismiga o'tganda`,
                    `Ochiq yopiq harakat qilganda`

                ],
                trueAnswer: `Yo'lning yopiq qismidan ochiq qismiga o'tganda`
            },
            {
                id:5,
                img:universalImage,
                question:`Kunning yorug' vaqtida aholi punktlaridan tashqarida quvib o'tilayotgan transport vositasi haydovchisining e'tiborini qanday jalb qilasiz?`,
                answers: [
                    `Faqat chiroqlarni yoqib o'chirish bilan`,
                    `Sanab o'tilgan barcha usul bilan va ularni birgalikda qo'llash bilan`,
                    `Faqat tovush ishoralarini qo'llab`

                ],
                trueAnswer: `Yo'q`
            },
            {
                id:6,
                img: universalImage,
                question:`Cheklangan ko'rinish sharoitida orqaga harakatlanishda harakat xavfsizligini ta'minlash uchun:`,
                answers: [
                    `Falokat yoqug'lik ishoralarini yoqish`,
                    `Boshqa transport vositalaridan foydalanish`,
                    `Tovushli signal berish`
                ],
                trueAnswer: `Boshqa transport vositalaridan foydalanish`
            },
            {
                id:7,
                img:img797,
                question:`Ushbu vaziyatda quvib o'tishdan so'ng siz o'rta bo'lakda qolishingiz mumkinmi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Yo'q`
            },
            {
                id:8,
                img:universalImage,
                question:` Yonlama oraliq masofani tanlashda tezlikning dahli bormi?`,
                answers: [
                    `Yonlama oraliq masofa tanlashing tezlikka aloqasi yo'q`,
                    `Tezlik oshganda yonlama oraliq masofani oshirish kerak`

                ],
                trueAnswer: `Tezlik oshganda yonlama oraliq masofani oshirish kerak`
            },
            {
                id:9,
                img:img799,
                question:` Ushbu holatda siz bajarishingiz lozim:`,
                answers: [
                    `Belgi oldida to'xtash`,
                    `Boshqa transport vositalari bo'lmasa to'xtamasdan o'tib ketish`,
                    `To'xtash chizig'i oldida to'xtatish`
                ],
                trueAnswer: `To'xtash chizig'i oldida to'xtatish`
            },
            {
                id:10,
                img:universalImage,
                question:`Piyodalar to'xtab turgan avtobus va trolleybusning qaysi tomonidan yo'lni kesib o'tishlari kerak?`,
                answers: [
                    `Old tomondan`,
                    `Orqa tomondan`,
                    `Istalgan tomondan`
                ],
                trueAnswer: `Orqa tomondan`
            }
        ]
    },
/* Bilet 10 */
    {
        bilet:10,
        questions: [
            {
                id:1,
                img:img801,
                question:`Ushbu yo'l belgisi ta'sir oralig'ida sizga odam tushirish (chiqarish)ga yoki yuk ortish (tushirish)ga ruxsat etiladimi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Ha`
            },
            {
                id:2,
                img:universalImage,
                question:`Aholi punktlariga tegishli yo'l harakati qoidalari qayerdan boshlanadi?`,
                answers: [
                    `Aholi punkti nomini ko'rsatuvchi oq rangli 5.22 va 5.24 havorangli yo'l belgisidan boshlab`,
                    `Yo'l yuzidagi qurilma va inshootlardan boshlab`,
                    `Aholi punkti nomini ko'rsatuvchi oq rangli 5.22 yo'l belgisidan boshlab`
                ],
                trueAnswer: `Aholi punkti nomini ko'rsatuvchi oq rangli 5.22 yo'l belgisidan boshlab`
            },
            {
                id:3,
                img:universalImage,
                question:`Burilish ko'rsatkichi bilan berilayotgan ogohlantiruvchi ishora qachon to'xtatilishi kerak?`,
                answers: [
                    `Manyoverni bajargandan so'ng, darhol`,
                    `Manyoverni bajarayotganda`,
                    `Manyoverni bajarishdan oldin`
                ],
                trueAnswer: `Manyoverni bajargandan so'ng, darhol`
            },
            {
                id:4,
                img:universalImage,
                question:`Yoqilg'i bilan ta'minlash tepkisini keskin tezlikni oshirish uchun bosayotganda, avtomobil sirpanishni boashlasa haydovchi qanday harakat qilishi kerak?`,
                answers: [
                    `Tepkini yana kuchliroq bosish`,
                    `Tepkiga ta'sir etuvchi kuchni kamaytirish`,
                    `Tepkiga ta'sir etuvchi kuchni o'zgartirmaslik`

                ],
                trueAnswer: `Tepkiga ta'sir etuvchi kuchni kamaytirisha`
            },
            {
                id:5,
                img:universalImage,
                question:`Tormoz tizimi ishlamaydigan avtomobilning vazni sizning avtomobilingizni yarim vaznidan og'ir bo'lsa uni shatakka olishingizga ruxsat etiladimi`,
                answers: [
                    `Ruxsat etiladi`,
                    `Faqat 30km/soat tezlikda ruxsat etiladi`,
                    `Taqiqlanadi`

                ],
                trueAnswer: `Taqiqlanadi`
            },
            {
                id:6,
                img: img806,
                question:`Yo'nalishli transport vositasi bekatidan tashqarida yo'l chetidan qo'zg'alayotgan yo'nalishli transport vositasiga yo'l berishingiz kerakmi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Yo'q`
            },
            {
                id:7,
                img:img807,
                question:`To'xtab turish qoidasini kim buzdi?`,
                answers: [
                    `Faqat  "B"`,
                    `"A" va "B"`,
                    `Faqat  "A"`
                ],
                trueAnswer: `Faqat  "B"`
            },
            {
                id:8,
                img:universalImage,
                question:`Quruq ob-havo sharoitida asfalt - beton qoplamali yo'lda harakatlanayotgan haydovchi yomg'ir tomchilab qolganda nima qilishi kerak?`,
                answers: [
                    `Tezlikni o'zgartirmasdan harakatlanishni davom ettitirish kerak`,
                    `Yomg'ir tezlashib ketmasdan tezroq harakat qilish kerak`,
                    `Tezlikni kamaytirish va ehtiyot bo'lish kerak`

                ],
                trueAnswer: `Tezlikni kamaytirish va ehtiyot bo'lish kerak`
            },
            {
                id:9,
                img:img809,
                question:`Yengil avtomobilda qaysi yo'nalishda harakatlanishga ruxsat etiladi?`,
                answers: [
                    `Faqat to'g'riga`,
                    `Faqat chapga va o'ngga`,
                    `Istalgan yo'nalishda`
                ],
                trueAnswer: `Istalgan yo'nalishda`
            },
            {
                id:10,
                img:img8010,
                question:`Qaysi yo'l belgilari qayrilib olishga ruxsat beradi?`,
                answers: [
                    `Barchasi`,
                    `Faqat "B" va "G"`,
                    `Faqat "B"`,
                    `Faqat "A", "B", va "V"`

                ],
                trueAnswer: `Barchasi`
            }
        ]
    },

]

export default autoQuestions;