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
import img813 from "./Images/81-3.jpg";
import img814 from "./Images/81-4.jpg";
import img815 from "./Images/81-5.jpg";
import img817 from "./Images/81-7.jpg";
import img8110 from "./Images/81-10.jpg";
import img821 from "./Images/82-1.jpg";
import img825 from "./Images/82-5.jpg";
import img828 from "./Images/82-8.jpg";
import img8210 from "./Images/82-10.jpg";
import img831 from "./Images/83-1.jpg";
import img832 from "./Images/83-2.jpg";
import img835 from "./Images/83-5.jpg";
import img836 from "./Images/83-6.jpg";
import img837 from "./Images/83-7.jpg";
import img8310 from "./Images/83-10.jpg";
import img841 from "./Images/84-1.jpg";
import img844 from "./Images/84-4.jpg";
import img846 from "./Images/84-6.jpg";
import img854 from "./Images/85-4.jpg";
import img855 from "./Images/85-5.jpg";
import img856 from "./Images/85-6.jpg";
import img859 from "./Images/85-9.jpg";
import img862 from "./Images/86-2.jpg";
import img865 from "./Images/86-5.jpg";
import img866 from "./Images/86-6.jpg";
import img871 from "./Images/87-1.jpg";
import img872 from "./Images/87-2.jpg";
import img874 from "./Images/87-4.jpg";
import img879 from "./Images/87-9.jpg";
import img882 from "./Images/88-2.jpg";
import img885 from "./Images/88-5.jpg";
import img887 from "./Images/88-7.jpg";
import img888 from "./Images/88-8.jpg";
import img889 from "./Images/88-9.jpg";
import img896 from "./Images/89-6.jpg";
import img898 from "./Images/89-8.jpg";
import img899 from "./Images/89-9.jpg";
import img903 from "./Images/90-3.jpg";
import img905 from "./Images/90-5.jpg";
import img908 from "./Images/90-8.jpg";
import img911 from "./Images/91-1.jpg";
import img912 from "./Images/91-2.jpg";
import img913 from "./Images/91-3.jpg";



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
/* Bilet 11 */
    {
    bilet:11,
    questions: [
    {
        id:1,
        img:universalImage,
        question:`Avtomobilni qanday boshqarish usuli yonilg'i sarfini tejaydi?`,
        answers: [
            `Ohista ravon tezlanish va shiddat bilan sekinlashish bilan`,
            `Shiddat bilan tezlanish va ohista ravon sekinlashish bilan`,
            `Ohista ravon tezlanish va ohista ravon sekinlashish bilan`
        ],
        trueAnswer: `Ohista ravon tezlanish va ohista ravon sekinlashish bilan`
    },
    {
        id:2,
        img:universalImage,
        question:`Moped haydovchisiga ruxat beriladi:`,
        answers: [
            `Barcha sanab o'tilgan hollarda`,
            `Faqat yo'l yoqasidan harakatlanishga, agar piyodalarga halaqit bermasa`,
            `Faqat yo'lning chetki o'ng bo'lagi tomonidan bir qator bo'lib harakatlanishga`
        ],
        trueAnswer: `Barcha sanab o'tilgan hollarda`
    },
    {
        id:3,
        img:img813,
        question:`Ushbu belgi ...`,
        answers: [
            `Oldinda transport vositalari orasida xavfsiz oraliqni ta'minlash haqida ogohlantiradi`,
            `Oldinda harakatlanish serqatnovligi haqida ogohlantiradi`,
            `Oldinda transport vositalarining tirbandligi haqida ogohlantiradi`
        ],
        trueAnswer: `Oldinda transport vositalarining tirbandligi haqida ogohlantiradi`
    },
    {
        id:4,
        img:img814,
        question:`Quyidagi belgilardan qays biri haydovchini boshq xavf-xatarlar to'g'risida ogohlantiradi?`,
        answers: [
            `Faqat "B"`,
            `Faqat "A"`,
            `Faqat "V"`

        ],
        trueAnswer: `Faqat "V"`
    },
    {
        id:5,
        img:img815,
        question:`Harakatlanishga ruxsat berilgan:`,
        answers: [
            `Qizil, sariq va yashil avtomobilga `,
            `Qizil, ko'k, yashil va sariq avtomobilga`,
            `Qizil va sariq avtomobilga`

        ],
        trueAnswer: `Qizil va sariq avtomobilga`
    },
    {
        id:6,
        img: universalImage,
        question:`Svetaforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmoqning yo'naltirgichli yashil ishorasi yo'nalishida harakatlanayotgan transport vositasining haydovchisi kimga yo'l berishi kerak?`,
        answers: [
            `Boshqa yo'nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak`,
            `Qarama-qarshi yo'nalishda to'g'riga yoki o'ngga harakatlanayotgan transport vositalariga`
        ],
        trueAnswer: `Boshqa yo'nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak`
    },
    {
        id:7,
        img:img817,
        question:`Ushbu yotiq chiziq nimani bildiradi?`,
        answers: [
            `Velosiped yolkasini`,
            `Yo'nalishli taksilar to'xtaydigan joyni`,
            `Suniy yo'l noteksligini`
        ],
        trueAnswer: `Suniy yo'l noteksligini`
    },
    {
        id:8,
        img:universalImage,
        question:`Yo'l-transport hodisasi - bu ...`,
        answers: [
            `Yo'l harakati qatnashichilarining yo'l-tranportlari va ularning oqibatlaridan himoyalanganlik daraja`,
            `Transport vositasining yo'lda harakatlanishi jarayonida ro'y bergan fuqoralarning halok bo'lishiga`

        ],
        trueAnswer: `Transport vositasining yo'lda harakatlanishi jarayonida ro'y bergan fuqoralarning halok bo'lishiga`
    },
    {
        id:9,
        img:universalImage,
        question:`Piyodalar o'tish joyi - bu ...`,
        answers: [
            `Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to'siqlar bilan ajratilgan va piyodalarni`,
            `Yo'l qatnov qismining piyodalar kesib o'tishi uchun mo'ljallangan 5.16.1 va 5.16.2 belgilari`,
            `Yo'lning piyodalar harakatlanishi uchun mo'ljallangan va transport vositalari harakati taqiqlangan`
        ],
        trueAnswer: `Yo'l qatnov qismining piyodalar kesib o'tishi uchun mo'ljallangan 5.16.1 va 5.16.2 belgilari`
    },
    {
        id:10,
        img:img8110,
        question:`Siz chorrahada chapga burilishda qaysi transport vositasia yo'l berishingiz kerak?`,
        answers: [
            `Hech kimga`,
            `Yengil avtomobilga`,
            `Aftobusga`
        ],
        trueAnswer: `Hech kimga`
    }
    ]
    },
/* Bilet 12 */
    {
    bilet:12,
    questions: [
    {
        id:1,
        img:img821,
        question:`Qaysi rasmdagi yo'l ajratuvchi bo'lakka ega?`,
        answers: [
            `Chap tarafdagisida`,
            `Har ikkisida`,
            `O'ng tarafdagisida`
        ],
        trueAnswer: `Har ikkisida`
    },
    {
        id:2,
        img:img821,
        question:`Ushbu ko'rsatilgan yo'llar nechta qatnov qismiga ega?`,
        answers: [
            `4`,
            `2`,
            `1`
        ],
        trueAnswer: `2`
    },
    {
        id:3,
        img:universalImage,
        question:`To'xtab turish tormoz tizimi N toifadagi avtotransport vositalarini aslahalangan holatda qanday qiyalikda harakatsiz holatda ushlab tura olmasa foydalanish taqiqlanadi?`,
        answers: [
            `25% foizda kam bo'lgan`,
            `16 foizdan kam bo'lgan`,
            `31 foizdan kam bo'lgan`,
            `20 foizdan kam bo'lgan`
        ],
        trueAnswer: `31 foizdan kam bo'lgan`
    },
    {
        id:4,
        img:universalImage,
        question:`Piyodalar yo'lkasi - bu ...`,
        answers: [
            `Yo'l qatnov qismining piyodalar kesib o'tishi uchun mo'ljallangan 5.16.1 va 5.16.2 yo'l belgilari va`,
            `Yo'lning piyodalar harakatlanish uchun mo'lajallangan va transport vositalari harakati taqiqlangan`,
            `Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to'siqlar bilan ajratilgan va piyodalarni`

        ],
        trueAnswer: `Yo'lning piyodalar harakatlanish uchun mo'lajallangan va transport vositalari harakati taqiqlangan`
    },
    {
        id:5,
        img:img825,
        question:`Qaysi belgi yo'lning tor qismlarida ro'paradan kelayotgan transport vositasiga yo'l berish lozimligini bildiradi?`,
        answers: [
            `"B"`,
            `"A"`,
            `"A" va "G"`,
            `"G"`,
            `"B" va "V"`

        ],
        trueAnswer: `"A"`
    },
    {
        id:6,
        img: universalImage,
        question:`Bosh miya jarohatlanishining asosiy alomatlari:`,
        answers: [
            `Amneziya - xotiraning yo'qolishi sodir bo'lgan jarohatlanish bilan bog'liq va hayotdagi ba'zi`,
            `Qayt qilish bir-ikki marta, og'ir holatlarda ko'proq bo'lishi mumkin`,
            `Yuqoridagi barcha holatlar`,
            `Hushdan ketish bir necha soniyadan bir necha soatgacha bo'lishi mumkin`
        ],
        trueAnswer: `Yuqoridagi barcha holatlar`
    },
    {
        id:7,
        img:universalImage,
        question:`Yo'lning qiyaliklarida qisqa muddatga to'xtagan mexanik uzatmali avtomobilni joyidan to'satdan harakatlanib ketishini oldini olish uchun:`,
        answers: [
            `Birinchi uzatmani yoki orqa uzatmani ulash lozim`,
            `Uzatmalar qutisi richagini neytral holatga o'tkazish lozim`,
            `To'xtash turish tormozidan foydalanish lozim`
        ],
        trueAnswer: `To'xtash turish tormozidan foydalanish lozim`
    },
    {
        id:8,
        img:img828,
        question:`Ushbu belgilardan qaysi biri haydovchining shu joydagi yashash yoki ishlash joyiga yetib borshiga monelik qilmaydi?`,
        answers: [
            `"A"`,
            `"C"`,
            `"B"`,
            `"B" va "C"`

        ],
        trueAnswer: `"C"`
    },
    {
        id:9,
        img:universalImage,
        question:`G'ildiraklarni yo'l bilan ilashishi yo'qolganda (kuchli yomg'ir, sel yoki suv toshgan yo'l qismlari) haydovchi:`,
        answers: [
            `Tezlikni oshirish lozim`,
            `Dvigatel bilan tormozlash orqali tezlikni kamaytirish lozim`,
            `Tormoz tepkisini keskin bosish bilan tezlikni kamaytirish lozim`
        ],
        trueAnswer: `Dvigatel bilan tormozlash orqali tezlikni kamaytirish lozim`
    },
    {
        id:10,
        img:img8210,
        question:`Ko'rsatilgan yo'l belgilaridan qaysi biri taqiqlovchi belgilar ilgari kiritgan barcha cheklovlarni bekor qiladi?`,
        answers: [
            `"V" va "G"`,
            `"A" va "B"`,
            `Barchasi`,
            `Faqat "V"`
        ],
        trueAnswer: `Faqat "V"`
    }
    ]
    },
/* Bilet 13 */
    {
    bilet:13,
    questions: [
        {
            id:1,
            img:img831,
            question:`Ushbu chorrahada kim yo'l beradi?`,
            answers: [
                `Ko'k avtomobil`,
                `Motosikl va sariq avtomobil`
            ],
            trueAnswer: `Ko'k avtomobil`
        },
        {
            id:2,
            img:img832,
            question:`Qaysi belgi velosiped yo'lkasini ko'rsatadi?`,
            answers: [
                `"A"`,
                `"C"`,
                `"B"`
            ],
            trueAnswer: `"C"`
        },
        {
            id:3,
            img:universalImage,
            question:`Agar haydovchi keskin tormoz bermasdan harakatni to'xtata olmasa, svetaforning yashil ishorasidan keyin yongan sariq ishorasida harakatni davom ettirishga ruxsat beriladimi?`,
            answers: [
                `Ruxsat etiladi`,
                `Taqiqlanadi`
            ],
            trueAnswer: `Ruxsat etiladi`
        },
        {
            id:4,
            img:universalImage,
            question:`Avtomobillarning bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo'l qatnov qismining qanday bo'ylama bo'lagi nima deb ataladi?`,
            answers: [
                `Harakatlanish bo'lagi`,
                `Qatnov qismi`,
                `Yo'l yoqasi`,
                `Yondosh hudud`

            ],
            trueAnswer: `Harakatlanish bo'lagi`
        },
        {
            id:5,
            img:img835,
            question:`Qaysi belgi "Xavfli yuk tashiyotgan transport vositalarining harakatlanishi taqiqlangan" deb nomlanadi?`,
            answers: [
                `"C"`,
                `"B"`,
                `"A"`
            ],
            trueAnswer: `"C"`
        },
        {
            id:6,
            img: img836,
            question:`Ushbu belgi qaysi turdagi transport vositalarini to'xtamasdan o'tishlarini taqiqlaydi?`,
            answers: [
                `Yengil avtomobillarini`,
                `Yuk avtomobillarini`,
                `Barcha turdagi transport vositalarini`
            ],
            trueAnswer: `Barcha turdagi transport vositalarini`
        },
        {
            id:7,
            img:img837,
            question:`Xavfsiz oraliq masofani ko'rsating`,
            answers: [
                `"A" va "V"`,
                `"B"`,
                `"V"`
            ],
            trueAnswer: `"B"`
        },
        {
            id:8,
            img:universalImage,
            question:` Chorraha - bu ...`,
            answers: [
                `Bevosita yo'lga tutashgan va transport vositalari o'tib ketishi uchun mo'ljallangan hudud ()`,
                `Yolning relssiz tranport vositalari harakati uchun mo'ljallangan qismi`,
                `Yo'llarning o'zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi`

            ],
            trueAnswer: `Yo'llarning o'zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi`
        },
        {
            id:9,
            img:universalImage,
            question:`Shoking belgilari:`,
            answers: [
                `Teri va shilliq qavatning oqarishi`,
                `Kuchli ter ajralishi`,
                `Og'iz qurishi, chanqoqlik, nafas olishning tezlashuvi`,
                `Yuqoridagi barcha holatlar`
            ],
            trueAnswer: `Yuqoridagi barcha holatlar`
        },
        {
            id:10,
            img:img8310,
            question:`Quvib o'tishga talluqli belgilarni ko'rsating?`,
            answers: [
                `"B" va "C"`,
                `"A" va "C"`,
                `"A" va "B"`
            ],
            trueAnswer: `"A" va "C"`
        }
    ]
    },
/* Bilet 14 */
    {
    bilet:14,
    questions: [
        {
            id:1,
            img:img841,
            question:`Ushbu holatda qaysi transport vositasi yo'l berishi kerak?`,
            answers: [
                `Aftobus`,
                `Yengil avtomobil`
            ],
            trueAnswer: `Aftobus`
        },
        {
            id:2,
            img:universalImage,
            question:`Tik nishabliklarda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?`,
            answers: [
                `Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi`,
                `Nishablik qancha qiya bo'lsa uzatma pog'onasida shuncha yuqpri tanlanadi`,
                `Pog'ona tanlashning nishablikka aloqasi yo'q`
            ],
            trueAnswer: `Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi`
        },
        {
            id:3,
            img:universalImage,
            question:`Svetaforning miltillovchi sariq ishorasi nima haqida ogohlantiradi?`,
            answers: [
                `Chorraha tartibga solinmagan to'g'risida`,
                `Harakatlanishga ruxsat beradi`,
                `Barcha javoblar to'g'ri`

            ],
            trueAnswer: `Barcha javoblar to'g'ri`
        },
        {
            id:4,
            img:img844,
            question:`Qaysi belgi to'xtash chizig'i oldida, u bo'lmaganda, kesib o'tiladigan qatnov qismining chetida to'xtamasdan harakatlanishni taqiqlaydi?`,
            answers: [
                `"A" va "G"`,
                `"B"`,
                `"B" va  "V"`,
                `"A"`,
                `"G"`
            ],
            trueAnswer: `"B"`
        },
        {
            id:5,
            img:universalImage,
            question:` Yo'l harakati xavfsizligini ta'minlash -`,
            answers: [
                `Yo'l transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og'ir oqibatlarini`,
                `Yo'llarda harakatni boshqarish bo'yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqa harakat`
            ],
            trueAnswer: `Yo'l transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og'ir oqibatlarini`
        },
        {
            id:6,
            img: img846,
            question:`Qaysi belgilar yuk avtomobillarida quvib o'tishning taqiqlangan hududning oxirini bildiradi?`,
            answers: [
                `Faqat  "B"`,
                `Faqat  "A"`,
                `Faqat "A" va  "B"`,
                `"A", "B" va "V"`
            ],
            trueAnswer: `"A", "B" va "V"`
        },
        {
            id:7,
            img:universalImage,
            question:`Hayvonlarni yo'lda haydab borishga qoidaga ko'ra ruxsat etiladimi?`,
            answers: [
                `Kunning yorug' vaqtida`,
                `istalgan vaqtida`,
                `Kunning qorong'u vaqtida`
            ],
            trueAnswer: `Kunning yorug' vaqtida`
        },
        {
            id:8,
            img:universalImage,
            question:`Trasport vositalarini qatnov qismining kengaytirilmagan joylarida qanday tartibda to'xtash va to'xtab turishiga ruxsat etiladi`,
            answers: [
                `Burchak ostida`,
                `Parallel ravishda`,
                `Istalgan usulda`

            ],
            trueAnswer: `Parallel ravishda`
        },
        {
            id:9,
            img:universalImage,
            question:`Bosh miya jarohatlanishining quyidagi alomatlar bilan xarakterlanadi:`,
            answers: [
                `Hushdan ketish bir necha soniyadan bir necha soatgacha bo'lishi mumkin`,
                `Qayt qilish bir-ikki marta, og'ir holatlarda ko'proq bo'lishi mumkin`,
                `Amneziya - xotiraning yo'qolishi, sodir bo'lgan jarohatlanish bilan boq'liq ha hayotdagi ba'zi`,
                `Yuqoridagi barcha holatlar`
            ],
            trueAnswer: `Yuqoridagi barcha holatlar`
        },
        {
            id:10,
            img:universalImage,
            question:`Chorrahadan tashqaridagi tartibga solinmagan velosiped yo'lkasi bilan yo'l kesishmasida kim yo'l berishi kerak?`,
            answers: [
                `Velosiped yo'lkasidan harakatlanayotgan velosiped va moped haydovchilari`,
                `Transport vositalari haydovchilari`
            ],
            trueAnswer: `Velosiped yo'lkasidan harakatlanayotgan velosiped va moped haydovchilari`
        }
    ]
    },
/* Bilet 15 */
    {
        bilet:15,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Chap qo'lni yonga cho'zish yoki o'ng qo'lnitirsakdan to'g'ri burchak ostida bukib, yuqoriga ko'tarish ishorasi nimani bildiradi?`,
                answers: [
                    `To'xtashni`,
                    `O'ngga burilishni yoki qayrilib olishni`,
                    `Chapga burilishni yoki qayrilib olishni`
                    
                ],
                trueAnswer: `Chapga burilishni yoki qayrilib olishni`
            },
            {
                id:2,
                img:universalImage,
                question:`Sekinlashish bo'lagi bo'lgan yo'llarda burlmoqchi bo'lgan haydovchi qachon tezlikni kamaytirishi lozim?`,
                answers: [
                    `Sekinlashish bo'lagiga o'tgach`,
                    `Sekinlashish bo'lagiga o'tguncha`
                ],
                trueAnswer: `Sekinlashish bo'lagiga o'tgach`
            },
            {
                id:3,
                img:universalImage,
                question:`Avtomobilni qanday boshqarish usuli yonilg'i sarfini tejaydi?`,
                answers: [
                    `Ohista ravon tezlanish va shiddat bilan sekinlashish bilan`,
                    `Shiddat bilan tezlanish va ohista sekinlashish bilan`,
                    `Ohista ravon tezlanish va ohista sekinlashish bilan`

                ],
                trueAnswer: `Ohista ravon tezlanish va ohista sekinlashish bilan`
            },
            {
                id:4,
                img:img854,
                question:`Qaysi belgi svetaforining (tartibga soluvchining) taqiqlovchi ishorasida transport vositalari to'xtaydigan joyni bildiradi?`,
                answers: [
                    `"A"`,
                    `"V"`,
                    `"B"`,
                    `"G"`
                ],
                trueAnswer: `"V"`
            },
            {
                id:5,
                img:img855,
                question:`Ushbu holatda qaysi transport vositasi yo'l berishi kerak?`,
                answers: [
                    `Yengil Avtomobil`,
                    `Yuk avtomobil`
                ],
                trueAnswer: `Yuk avtomobil`
            },
            {
                id:6,
                img: img856,
                question:`Qaysi belgi falokatli holatlar uchun kirish yo'lini bildiradi?`,
                answers: [
                    `"C"`,
                    `"A" va "D"`,
                    `"B"`
                ],
                trueAnswer: `"B`
            },
            {
                id:7,
                img:universalImage,
                question:`Qattiq ulagichda shatakka olingan avtobusda yoki trolleybusda odam tashishga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Taqiqlanadi`
                ],
                trueAnswer: `Taqiqlanadi`
            },
            {
                id:8,
                img:universalImage,
                question:`Quyidagi izoh qaysi atamaga tegishli? Texnik nuqson, tashilayotgan yuk, haydovchi va yo'lovchining holati, yo'ldagi biror to'siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog'liq holda transport vositasi harakatini to'xtatish.`,
                answers: [
                    `Yo'l harakati xavfsizligini ta'minlash`,
                    `Majburiy to'xtash`,
                    `Yo'l transport hodisasi`

                ],
                trueAnswer: `Majburiy to'xtash`
            },
            {
                id:9,
                img:img859,
                question:` Ko'rsatilgan qaysi belgi yo'lning o'ta sirpanchiq bo'lgan qismini bildiradi?`,
                answers: [
                    `"A" va "V"`,
                    `Faqat "V"`,
                    `Faqat "A"`
                ],
                trueAnswer: `Faqat "V"`
            },
            {
                id:10,
                img:universalImage,
                question:`Arterial qon ketish alomatlarini ko'rsating:`,
                answers: [
                    `Qon tomirlaridan to'q qizil rangdagi qon sizib chiqadi`,
                    `Miyadagi qon qomirlaridan ichki a'zolarga qonning oqib chiqishi kuzatiladi`,
                    `Qon tomirlaridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi`
                ],
                trueAnswer: `Qon tomirlaridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi`
            }
        ]
    },
/* Bilet 16 */
    {
        bilet:16,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Turar joy dahalaridan chiqishda haydovchilar:`,
                answers: [
                    `Boshqa harakat qatnashchilariga yo'l berishi kerak`,
                    `Boshqa harakat qatnashchilariga nisbatan imtiyozga ega`
                    
                ],
                trueAnswer: `Boshqa harakat qatnashchilariga yo'l berishi kerak`
            },
            {
                id:2,
                img:img862,
                question:`Qaysi belgi temir yo'l kesishmasini to'suvchi qurilma bilan jihozlanganligi haqida ogohlantiradi?`,
                answers: [
                    `"A"`,
                    `"B"`,
                    `"D"`,
                    `"C"`
                ],
                trueAnswer: `"C"`
            },
            {
                id:3,
                img:universalImage,
                question:`Venoz qon ketish alomatlarini ko'rsating:`,
                answers: [
                    `Mayda qon tomirlaridan ichki a'zolarga qonning oqib chiqishi kuzatiladi`,
                    `Qon tomirlaridan to'q qizil rangdagi qon sizib oqib chiqadi`,
                    `Qon tomiridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi`

                ],
                trueAnswer: `Qon tomirlaridan to'q qizil rangdagi qon sizib oqib chiqadi`
            },
            {
                id:4,
                img:universalImage,
                question:`"Imtiyoz" atamasiga tegishli tarifni ko'rsating`,
                answers: [
                    `Yo'l harakati qatnashchilariga nisbatan imtiyozi bo'lgan boshqa yo'l harakati qatnashchilariga harakat`,
                    `Mo'ljallangan yo'nalishda boshqa yo'l harakati qatnashchilariga nisbatan oldin harakatlanish huquqii`
                ],
                trueAnswer: `Mo'ljallangan yo'nalishda boshqa yo'l harakati qatnashchilariga nisbatan oldin harakatlanish huquqii`
            },
            {
                id:5,
                img:img865,
                question:`Ushbu belgilardan qaysi biri bir yoki bir nechta bo'laklarda harakatlanish yo'nalishi qarama-qarshi tomonga o'zgarish mumkin bo'lgan yo'l qismining boshlanishini bildiradi?`,
                answers: [
                    `"A"`,
                    `"V"`,
                    `"B"`,
                ],
                trueAnswer: `"V"`
            },
            {
                id:6,
                img: img866,
                question:`Chorrahada qaysi avtomobil yo'l berishi kerak?`,
                answers: [
                    `Qizil avtomobil`,
                    `Ko'k avtomobil`
                ],
                trueAnswer: `Qizil avtomobil`
            },
            {
                id:7,
                img:universalImage,
                question:`Agar biror-bir to'siq sababli qarama-qarshi yo'nalishlarda harakatlanish qiyin bo'lsa kim yo'l berishi kerak?`,
                answers: [
                    `To'siq o'z tomonida bo'lgan haydovchi`,
                    `To'siq bo'lmagan tomondagi haydovchi`
                ],
                trueAnswer: `To'siq o'z tomonida bo'lgan haydovchi`
            },
            {
                id:8,
                img:universalImage,
                question:`Tumanga qarshi chiroqlarni qorong'i vaqtda yo'lning yoritilmagan qismlarida uzoqni yorituvchi chiroqlar bilan birga qo'llash mumkinmi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Ha`
            },
            {
                id:9,
                img:universalImage,
                question:`Yengil avtomobil tirkamasi burilishda qanday troektoriya bo'yicha harakatlanadi?`,
                answers: [
                    `Burilish markaziga nisbatan avtomobil troyektoriyasidan tashqarida`,
                    `Burilish markaziga nisbatan avtomobil troyektoriyasidan ichkarida`,
                    `Avtomobil troyektoriyasi bo'yicha`
                ],
                trueAnswer: `Burilish markaziga nisbatan avtomobil troyektoriyasidan ichkarida`
            },
            {
                id:10,
                img:universalImage,
                question:`G'ildiraklarni yo'l bilan ilashishi yo'qolganda (kuchli yomg'ir, sel yoki suv toshgan yo'l qismlari) haydovchi:`,
                answers: [
                    `Tormoz tepkisini keskin bosish bilan tezlikni kamaytirish lozim`,
                    `Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim`,
                    `Tezlikni oshirishi lozim`
                ],
                trueAnswer: `Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim`
            }
        ]
    },
/* Bilet 17 */
    {
        bilet:17,
        questions: [
            {
                id:1,
                img:img871,
                question:`Ushbu belgi nimani bidiradi?`,
                answers: [
                    `Oldinda tik balandlik borligini`,
                    `Suniy yo'l noteksligini`,
                    `Oldinda ko'tarma ko'prik borligini`
                    
                ],
                trueAnswer: `Suniy yo'l noteksligini`
            },
            {
                id:2,
                img:img872,
                question:`Ushbu holatda ko'k avtomobil haydovchisi kimga yo'l berishi lozim?`,
                answers: [
                    `Faqat yengil avtomobil`,
                    `Faqat aftobus`,
                    `Hech kimga`
                ],
                trueAnswer: `Hech kimga`
            },
            {
                id:3,
                img:universalImage,
                question:`Aholi punktlaridan tashqarida tirkamali yuk avtomabillari qanday yuqori tezlik bilan harakatlanishi mumkin?`,
                answers: [
                    `70 km/s`,
                    `90 km/s`,
                    `60 km/s`,
                    `80 km/s`
                ],
                trueAnswer: `70 km/s`
            },
            {
                id:4,
                img:img874,
                question:`Ushbu belgilardan qaysi biri "Notekis yo'l" deb nomlanadi?`,
                answers: [
                    `"B"`,
                    `"A"`,
                    `"C"`
                ],
                trueAnswer: `"C"`
            },
            {
                id:5,
                img: universalImage,
                question:`Qorin bo'shlig'i jarohatlangan odamga ovqat, suv, dori-darmon berish mumkinmi?`,
                answers: [
                    `Ha`,
                    `Yo'q`
                ],
                trueAnswer: `Yo'q`
            },
            {
                id:6,
                img: universalImage,
                question:`Tormoz yo'li deb nimga aytiladi?`,
                answers: [
                    `Haydovchi tormoz tepksini bosgandan to avtomobil to'liq to'xtaguncha bosib o'tgan masofasi`,
                    `Haydovchi biron bir xavfni aniqlab, avtomobil to'liq to'xtaguncha bosib o'tgan masofasi`
                ],
                trueAnswer: `Haydovchi tormoz tepksini bosgandan to avtomobil to'liq to'xtaguncha bosib o'tgan masofasi`
            },
            {
                id:7,
                img:universalImage,
                question:`Yo'l harakati qodalariga ko'ra yo'l belgilari necha guruhga bo'linadi?`,
                answers: [
                    `5`,
                    `6`,
                    `7`
                ],
                trueAnswer: `7`
            },
            {
                id:8,
                img:universalImage,
                question:`Mexanik transport vositasi - bu ...`,
                answers: [
                    `Odamlarni, yuklarn tashishga yoki maxsus ishlarni bajarishga mo'ljallangan qurilma`,
                    `Dvigatel bilan harakatga keltiriladigan transport vositasi (mopeddan tashqari)`,
                    `Mexanik transport vositasi taarkibida harakatlanishga mo'ljallangan, dvigatel bilan jihozlanmagan transport`
                ],
                trueAnswer: `Dvigatel bilan harakatga keltiriladigan transport vositasi (mopeddan tashqari)`
            },
            {
                id:9,
                img:img879,
                question:`Yengil avtomobil qaysi yo'nalishlarda harakatlanishga ruxsat etiladi?`,
                answers: [
                    `Faqat o'ngga va chapga`,
                    `Istalgan yo'nalishda`,
                    `Faqat to'g'riga`
                ],
                trueAnswer: `Istalgan yo'nalishda`
            },
            {
                id:10,
                img:universalImage,
                question:`Tezlik ortishi bilan haydovchining ko'rish maydoni qanday o'zgaradi?`,
                answers: [
                    `Kengayadi`,
                    `O'zgarmaydi`,
                    `Torayadi`
                ],
                trueAnswer: `Torayadi`
            }
        ]
    },
/* Bilet 18 */
    {
        bilet:18,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Yo'lning xavfli burilishlarida oldingi uzatmali avtomobilning orqa o'qi yon tomonga sirpanayotganda siz qanday harakat qilasiz?`,
                answers: [
                    `Gaz pedalini ko'proq bosib, avtomobilni rul chambaragini o'zgartirmasdan sirpanishdan olib chiqasiz`,
                    `Gaz berishni kamaytirib rub chambaragi bilan boshqaruvni barqarorlashtirish`,
                    `Tormozlab turib rul chambaragini sirpangan tomonga burasiz`,
                    `Gaz pedalini ohista bosib, avtomobilni rul chambaragini to'g'rilab, avtomobil sirpanishdan olib ketish`
                    
                ],
                trueAnswer: `Gaz pedalini ohista bosib, avtomobilni rul chambaragini to'g'rilab, avtomobil sirpanishdan olib ketish`
            },
            {
                id:2,
                img:img882,
                question:`Ushbu chorrahada haydovchi orqaga harakatlanib ko'rsatilgan manyovrni bajarishga ruxsat etiladimi?`,
                answers: [
                    `Ruxsat etiladi`,
                    `Taqiqlanadi`
                ],
                trueAnswer: `Taqiqlanadi`
            },
            {
                id:3,
                img:universalImage,
                question:`M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?`,
                answers: [
                    `25 gradus`,
                    `10 gradus`,
                    `20 gradus`
                ],
                trueAnswer: `20 gradus`
            },
            {
                id:4,
                img:universalImage,
                question:`Haydovchining o'rtacha reaksiya vaqti deb qabul qilingan:`,
                answers: [
                    `Taxminan 0.2 sekund`,
                    `Taxminan 1 sekund`,
                    `Taxminan 0.5 sekund`
                ],
                trueAnswer: `Taxminan 1 sekund`
            },
            {
                id:5,
                img: img885,
                question:`Ushbu tik chiziq nimani bildiradi?`,
                answers: [
                    `Yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo'l to'siqlarining yon yuzasini`,
                    `Temir yo'l kesishmasiga yaqinlashayotganlik haqida`,
                    `Xavfli chorrahaga yaqinlashayotganlik haqida`
                ],
                trueAnswer: `Yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo'l to'siqlarining yon yuzasini`
            },
            {
                id:6,
                img: universalImage,
                question:`Yondosh hudud bu - ...`,
                answers: [
                    `Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi`,
                    `Bevosita yo'lga tutashgan va transport vositalari o'tib ketishi uchun mo'ljallanmagan hudud`,
                    `Yo'llarning o'zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi`
                ],
                trueAnswer: `Bevosita yo'lga tutashgan va transport vositalari o'tib ketishi uchun mo'ljallanmagan hudud`
            },
            {
                id:7,
                img:img887,
                question:`Ushbu yo'l belgisi nimani bildiradi?`,
                answers: [
                    `Og'ir yuk tashilayotgan transport vositalarining harakatini taqiqlaydi`,
                    `Xavfli yuk tashilayotgan transport vositalarining harakatini taqiqlaydi`,
                    `Portlovchi va tez alangalanadigan yuk tashilayotgan transport vositalarining harakatini taqiqlaydi`
                ],
                trueAnswer: `Xavfli yuk tashilayotgan transport vositalarining harakatini taqiqlaydi`
            },
            {
                id:8,
                img:img888,
                question:`Ushbu yo'l belgisi qanday maqsadda qo'llaniladi?`,
                answers: [
                    `Ehtiyot choralarini ko'rish uchun`,
                    `To'xtamasdan o'tishni taqiqlaydi`,
                    `Majburiy tarzda tezlikni kamaytirish uchun`
                ],
                trueAnswer: `To'xtamasdan o'tishni taqiqlaydi`
            },
            {
                id:9,
                img:img889,
                question:`Qaysi yo'l belgilari yo'lning tor qismida haydovchiga ustunlik beradi?`,
                answers: [
                    `"A" va "B"`,
                    `Faqat "D"`,
                    `Faqat "B"`,
                    `Faqat "C"`
                ],
                trueAnswer: `Istalgan yo'nalishda`
            },
            {
                id:10,
                img:universalImage,
                question:`Bosh miya jarohatlanganda, miya chayqalganda yoki bo'yin qismi jarohatlanganda birinchi yordam ko'rsatish:`,
                answers: [
                    `Jorahatlangan odamni qattiq va tekis zambilga solib, bo'yin qismi tagiga qattiq yostiqcha qo'yish`,
                    `Jarohatlangan odamni yonbashlab yotqizib, bo'yin qismi tagiga qattiq yostiqcha qo'yib mahkam bog'lash`,
                    `Jarohatlangan odamni tinchlantirish, jarohatlangan joy sohasini sovuq suv, muz qo'yish yo'llari bilan`
                ],
                trueAnswer: `Jorahatlangan odamni qattiq va tekis zambilga solib, bo'yin qismi tagiga qattiq yostiqcha qo'yish`
            }
        ]
    },
/* Bilet 19 */
    {
        bilet:19,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Turar joy dahalarida qanday eng katta tezlikda harakatlanishga ruxsat etiladi:`,
                answers: [
                    `20 km/s`,
                    `30 km/s`,
                    `40 km/s`,
                    `50 km/s`
                    
                ],
                trueAnswer: `30 km/s`
            },
            {
                id:2,
                img:universalImage,
                question:`Chapga burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o'tayotgan piyodalarga yo'l berishi kerakmi?`,
                answers: [
                    `Ha, agarda piyodalar o'tish joyi bo'lsa`,
                    `Ha, barcha hollarda o'tkazishi kerak`
                ],
                trueAnswer: `Ha, barcha hollarda o'tkazishi kerak`
            },
            {
                id:3,
                img:universalImage,
                question:`Aylanma harakatlanish chorrahasida ...`,
                answers: [
                    `Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka ega`,
                    `Harakatlanayotgan transport vositalariga aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka ega`
                ],
                trueAnswer: `Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka ega`
            },
            {
                id:4,
                img:universalImage,
                question:`Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi:`,
                answers: [
                    `Avtomobilni tormozlab, yo'lning qatnov qismiga ohista ravon burish`,
                    `Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`,
                    `Avtomobilni tormozlasjh va to'liq to'xtatish`
                ],
                trueAnswer: `Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`
            },
            {
                id:5,
                img: universalImage,
                question:`Kunning qorong'i vaqtida harakatlanayotgan transport vositasining haydovchisi tezlikni tanlashda qanday eng asosiy hal qiluvchi omilni e'tiborga olishi kerak?`,
                answers: [
                    `Yo'l harakati qoidalari o'rnatilgan tezlik chegaralarini`,
                    `Transport vositalarining texnik tavsifnomasida ko'rstailgan tezlik chegarasini`,
                    `Ko'rinish sharoitini`
                ],
                trueAnswer: `Ko'rinish sharoitini`
            },
            {
                id:6,
                img: img896,
                question:`Ushbu qo'shimcha axborot yo'l belgisi bildiradi:`,
                answers: [
                    `Barcha turdagi transport vositalarining to'xtab turish uchun yo'lning qatnov qismida trotuar yoniga`,
                    `Yengil avtomobillarning to'xtab turish joyini`,
                    `Mexanik transport vositalarining to'xtab turish joyini`
                ],
                trueAnswer: `Barcha turdagi transport vositalarining to'xtab turish uchun yo'lning qatnov qismida trotuar yoniga`
            },
            {
                id:7,
                img:universalImage,
                question:`M2 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig'indisiga yo'l qo'yiladi?`,
                answers: [
                    `10 gradus`,
                    `20 gradus`,
                    `25 gradus`
                ],
                trueAnswer: `20 gradus`
            },
            {
                id:8,
                img:img898,
                question:`Ushbu chorrahada avtobus haydovchisi kimga yo'l berishi kerak?`,
                answers: [
                    `Ko'k avtomobilga`,
                    `Hech kimga`,
                    `Qizil avtomobilga`
                ],
                trueAnswer: `Ko'k avtomobilga`
            },
            {
                id:9,
                img:img899,
                question:`Qaysi rasmda ajratuvchi bo'lagi bor bo'lgan yo'l ko'rsatilgan?`,
                answers: [
                    `Chapda`,
                    `Har ikkisida`,
                    `O'ngda`
                ],
                trueAnswer: `Har ikkisida`
            },
            {
                id:10,
                img:universalImage,
                question:`Muskul va paylarning ezilishi hamda cho'zilishi alomatlari qanday?`,
                answers: [
                    `Jorahatlangan joyda shish paydo bo'ladi, og'riq seziladi, ba'zan shu joyda kapilliyar qin tomiri`,
                    `Jarohatlangan joyda og'riq seziladi`
                ],
                trueAnswer: `Jorahatlangan joyda shish paydo bo'ladi, og'riq seziladi, ba'zan shu joyda kapilliyar qin tomiri`
            }
        ]
    },
/* Bilet 20 */
    {
        bilet:20,
        questions: [
            {
                id:1,
                img:universalImage,
                question:`Yo'l harakati xavfsizligini ta'minlash - ...`,
                answers: [
                    `Yo'l transport hodisalarining kelib chiwish sabablarini oldini olishga, ularning og'ir oqibatlarini`,
                    `Yo'llarda harakatni boshqarish bo'yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqaruv harakat`,
                    `Yo'l harakati qatnashchilarining yo'l-transport hidisalari va ularning oqibarlaridan himoyalanganlik`
                    
                ],
                trueAnswer: `Yo'l transport hodisalarining kelib chiwish sabablarini oldini olishga, ularning og'ir oqibatlarini`
            },
            {
                id:2,
                img:universalImage,
                question:` "Aholi punkti" atamasi nimani bildiradi?`,
                answers: [
                    `Aholi yashaydigan hududni`,
                    `Shahar, qishloq joylari hududi`,
                    `Kirish va chiqish yo'llari 5.22 - 5.25 belgilari bilan belgilangan hududni`
                ],
                trueAnswer: `Kirish va chiqish yo'llari 5.22 - 5.25 belgilari bilan belgilangan hududni`
            },
            {
                id:3,
                img:img903,
                question:`Ushbu belgilardan qaysi biri oldinda yo'l qoplamasi istida sun'iy notekislik borligi haqida ogohlantiradi?`,
                answers: [
                    `"C"`,
                    `"A"`,
                    `"B"`,
                    `"A" va "C"`
                ],
                trueAnswer: `"B"`
            },
            {
                id:4,
                img:universalImage,
                question:`Shoking belgilari qanday?`,
                answers: [
                    `Kuchli ter ajralishi`,
                    `Teri va shilliq qavatning oqarishi`,
                    `Yuqoridagi barcha holatlar`,
                    `Og'iz qurishi, chanqoqlik, nafar olishning tezlashuvi`
                ],
                trueAnswer: `Yuqoridagi barcha holatlar`
            },
            {
                id:5,
                img: img905,
                question:`Qaysi belgi haydovchiga kesib o'tilayotgan yo'lda harakatlanayotgan transport vositalariga yo'l berishi lozimligini bildiradi?`,
                answers: [
                    `"A"`,
                    `"G"`,
                    `"V"`,
                    `"B" va "G"`,
                    `"B"`
                ],
                trueAnswer: `"B" va "G"`
            },
            {
                id:6,
                img: universalImage,
                question:`Tumanga qarshi old chiroqlrni qorong'i vaqtda, yo'lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga qo'llash mumkinmi?`,
                answers: [
                    `Mumkin`,
                    `Mumkin emas`
                ],
                trueAnswer: `Mumkin`
            },
            {
                id:7,
                img:universalImage,
                question:`Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi:`,
                answers: [
                    `Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`,
                    `Avtomobilni tormozlab, yo'lning qatnov qismiga ravon burish`,
                    `Avtomobilni tormozlash va to'liq to'xtatish`
                ],
                trueAnswer: `Avtomobilni tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`
            },
            {
                id:8,
                img:img908,
                question:`Ushbu ko'rsatilgan holatda kim yo'l berishi kerak?`,
                answers: [
                    `Motosikl haydovchisi`,
                    `Avtomobil haydovchisi`
                ],
                trueAnswer: `Motosikl haydovchisi`
            },
            {
                id:9,
                img:universalImage,
                question:`Ajratuvchi bo'lak - ...`,
                answers: [
                    `Yo'lning relssiz transport vositalari harakati uchun mo'ljallangan qismi`,
                    `Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi`,
                    `Avtomobillarning  bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan `
                ],
                trueAnswer: `Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi`
            },
            {
                id:10,
                img:universalImage,
                question:`Tik nishablikda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?`,
                answers: [
                    `Nishablik qancha qiya bo'lsa, uzatma pog'onasi shuncha yuqori tanlanadi`,
                    `Nishablik qancha qiya bo'lsa, uzatma pog'onasi shuncha past tanlanadi`,
                    `Pog'onaning nishablikka aloqai yo'q`
                ],
                trueAnswer: `Nishablik qancha qiya bo'lsa, uzatma pog'onasi shuncha past tanlanadi`
            }
        ]
    },
    /* Bilet 21 */
    {
        bilet:21,
        questions: [
            {
                id:1,
                img:img911,
                question:`shbu belgilardan qaysi biri oldinda yo'l qoplamasi istida sun'iy notekislik borligi haqida ogohlantiradi?`,
                answers: [
                    `"B"`,
                    `"C"`,
                    `"A" va "C"`,
                    `"A"`,
                    
                ],
                trueAnswer: `"B"`
            },
            {
                id:2,
                img:img912,
                question:` "Ushbu ko'rsatilgan holatda kim yo'l berishi kerak?`,
                answers: [
                    `Motosikl haydovchisi`,
                    `Avtomobil haydovchisi`
                ],
                trueAnswer: `Motosikl haydovchisi`
            },
            {
                id:3,
                img:img913,
                question:`Qaysi belgi haydovchiga kesib o'tilayotgan yo'lda harakatlanayotgan transport vositalariga yo'l berishi lozimligini bildiradi?`,
                answers: [
                    `"B" va "G"`,
                    `"G"`,
                    `"V"`,
                    `"B"`
                ],
                trueAnswer: `"B" va "G"`
            },
            {
                id:4,
                img:universalImage,
                question:`Ajratuvchi bo'lak - ...`,
                answers: [
                    `Yo'lning relssiz transport vositalaru harakati uchun mo'ljallangan qismi`,
                    `Avtomobillarning bir qator bo'lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan`,
                    `Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi transpprt vositalari harkatlanishi`
                ],
                trueAnswer: `Yo'lning yonma-yon joylashgan qatnov qismlarini ajratuvchi transpprt vositalari harkatlanishi`
            },
            {
                id:5,
                img: universalImage,
                question:`Tik nishablikda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?`,
                answers: [
                    `Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi`,
                    `Pog'onalarni nishablikka aloqasi yo'q`,
                    `Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha yuqori tanlanadi`
                ],
                trueAnswer: `Nishablik qancha qiya bo'lsa uzatma pog'onasi shuncha past tanlanadi`
            },
            {
                id:6,
                img: universalImage,
                question:`Shoking belgilari qanday?`,
                answers: [
                    `Og'iz qurishi, chanqoqlik, nafa olishning tezlashuvi`,
                    `Teri va shilliq qavatning oqarishi`,
                    `Yuqoridagi barcha holatlar`,
                    `Kuchli ter ajralishi`
                ],
                trueAnswer: `Yuqoridagi barcha holatlar`
            },
            {
                id:7,
                img:universalImage,
                question:`Yo'l harakati xavfsizligini ta'minlash - ...`,
                answers: [
                    `Yo'l transport hodisalarining kelib chiqish sabablarini oldini olishga. ularning og'ir oqibatlarini`,
                    `Yo'l harakati qatnashchilarining yo'l transport hodisalari va ularning oqibatlarinidan himoyalanganlik`,
                    `Yo'llarda harakatni boshqarish bo'yicha huquqiy,tashkiliy-texnikaviy tadbirlar va boshqaruv harakat`
                ],
                trueAnswer: `Yo'l transport hodisalarining kelib chiqish sabablarini oldini olishga. ularning og'ir oqibatlarini`
            },
            {
                id:8,
                img:universalImage,
                question:`"Aholi punkti" atamasi nimani bildiradi?`,
                answers: [
                    `Kirish va chiqish yo'llari 5.22-5.25 belgilari bilan belgilangan hududni`,
                    `Aholi yashaydigan hududni`
                ],
                trueAnswer: `Kirish va chiqish yo'llari 5.22-5.25 belgilari bilan belgilangan hududni`
            },
            {
                id:9,
                img:universalImage,
                question:`Agar avtomobilning o'ng g'ildiraklari nam qoplamali yo'l yoqasiga chiqib qolsa, tavsiya etiladi:`,
                answers: [
                    `Avtomobil tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`,
                    `Avtomobilni tormozlash va to'liq to'xtatish`,
                    `Avtombilni tormozlab, yo'lning qatnov qismiga ravon burish`
                ],
                trueAnswer: `Avtomobil tormozlamasdan yo'lning qatnov qismiga ohista ravon burish`
            },
            {
                id:10,
                img:universalImage,
                question:`Tumanga qarshi old chiroqlarni qorong'i vaqtda, yo'lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga qo'llash mumkinmi?`,
                answers: [
                    `Mumkin`,
                    `Mumkin emas`
                ],
                trueAnswer: `Mumkin`
            }
        ]
    },

]

export default autoQuestions;