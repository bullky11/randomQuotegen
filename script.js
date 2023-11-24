function generate(){
    var quotes = {
        "― Albert Einstein ":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty.',
        "― Lana Del Rey ":'"Who are you?Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them? I have. I am fucking crazy.But I am free.',
        "― Pierce Brown, Red Rising ": '"Man cannot be freed by the same injustice that enslaved it',
        "― Candace Bushnell ":'"Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
        "― Charlotte Eriksson, Empty Roads & Broken Bottles: in search for The Great Perhaps ":'All I wanted was to live a life where I could be me, and be okay with that. I had no need for material possessions, money or even close friends with me on my journey. I never understood people very well anyway, and they never seemed to understand me very well either. All I wanted was my art and the chance to be the creator of my own world, my own reality. I wanted the open road and new beginnings every day.',
        "― Deepak Chopra ":'"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "― Madeline Miller, The Song of Achilles ":'"Bury us, and mark our names above. Let us be free."',
        "- Aaron Lauritsen, 100 Days Drive: The Great North American Road ":'"here is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
        "-random emberke":'"nyomod neki!!"',
    }
    var autors =Object.keys(quotes);
    var autor=autors [Math.floor(Math.random()*autors.length)]
    
    var quote=quotes[autor];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=autor;
};