---
title: Generalni priručnik za Markdown sintaksu
collection: posts
date: 2012-05-13
---

Markdown je alat za konverziju čistog (plain) teksta u HTML sadržaj. Markdown ima sopstvenu sintaksu koja je veoma jednostavna za korišćenje. Prvenstveno je namenjen osobama koje pišu sadržaj vidljiv na Web-u i prema tome moraju da koriste HTML markup. Markdown je rešenje za pisanje čitkih, jednostavnih tekstualnih dokumenata koji se uz pomoć Markdown softvera konvertuju u validan HTML sadržaj. Dokumenti pisani Markdown sintaksom su veoma čitki pa se čak i ne moraju konvertovati u HTML ako ih čitate u običnom text editor-u. [John Gruber](http://daringfireball.net/), autor Markdown-a, inspiraciju za stvaranje Markdown-a je pronašao u jednostavnom formatu tekstualnih e-mail poruka.

U ovom članku će biti opisane mogućnosti i primene Markdown sintakse kroz mnoštvo primera. Nakon zvanične verzije Markdown-a [http://daringfireball.net/projects/markdown/syntax](http://daringfireball.net/projects/markdown/syntax), upoznaću vas sa [GFM](http://github.github.com/github-flavored-markdown/) unapređenim Markdown-om, kao i sa varijantom specifičnom za [Node Srbija](http://www.nodejs.rs/post/generalni-prirucnik-za-markdown-sintaksu#node-srbija-markdown), jer sve to možete koristiti na ovom sajtu.

Markdown pored svoje sintakse dozvoljava i upotrebu klasičnog HTML-a. Specijalni karakteri kao što su `>` i `&` će automatski biti escape-ovani. To znači da `4 < 5` jednostavno tako i napišete.  
Napomena: upotreba HTML-a na ovom sajtu je blokirana iz bezbednosnih razloga.

## Pasusi (paragraphs)

Pasus je jednostavno skup rečenica opciono odvojenih novim redom.  
Da biste napravili novi red (`<br />`), rečenicu završite sa dva razmaka pre nego što pređete u novi red.

Ovo je primer pasus. Još jedna test rečenica u istom pasusu koja se završava sa dva razmaka pa novi red.  
Primetićete da je ovaj tekst u novom redu.

```
Ovo je primer pasus. Još jedna test rečenica u istom pasusu koja se završava sa dva razmaka pa novi red.  
Primetićete da je ovaj tekst u novom redu.
```

## Naslovi (headers)

Postoje dva načina da kreirate naslov (header).

1. Da podvučete tekst sa bilo kojim brojem znakova jednako (`=`) ukoliko želite **h1** tag, ili ukoliko želite **h2** tag sa znakovima povlaka (`-`).
2. Započnete rečenicu sa određenim brojem znakova taraba (`#`). Broj znakova je od **1 - 6** u zavisnosti od željenog taga h1 - h6.
a) Kod prvog načina broj karaktera kojim podvlačite tekst nije bitan:

Ovo je primer za h1

Ovo je primer za h1
=============
Ovo je primer za h2
Ovo je primer za h2
----
b) Kod drugog načina rečenicu možete opciono i završiti sa tarabama (ne mora da se podudara sa brojem započetih taraba). Ovo je više u estetske svrhe kada se dokument čita u text editor-u.

Ovo je h1
Ovo je h2
Ovo je h3

Ovo je h4

Ovo je h5
Ovo je h6
# Ovo je h1
## Ovo je h2
### Ovo je h3
#### Ovo je h4
##### Ovo je h5
###### Ovo je h6
