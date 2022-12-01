<div align="center">
  
  ![Repo languages](https://img.shields.io/github/languages/count/YanDao0313/SakanaMusicPlayer?style=for-the-badge&logo=GitHub)
  ![GitHub stars](https://img.shields.io/github/stars/YanDao0313/SakanaMusicPlayer?style=for-the-badge&logo=GitHub)
  ![GitHub forks](https://img.shields.io/github/forks/YanDao0313/SakanaMusicPlayer?style=for-the-badge&logo=GitHub)
  [![website](https://img.shields.io/website?style=for-the-badge&logo=GitHub&down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fsakana-music-player.vercel.app)](https://sakana-music-player.vercel.app)

  <br />
  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/SMP.png" alt="Sakana Music Player">

  Languages: [English](./style-guide.md)

  <h1 align="center">Sakana Music Player Style-Guide</h2>

  A fully responsive web music player using vanilla javascript, <br />Responsive for all devices, build using html, css, and javascript. <br />With songs by [Sakanaction](https://sakanaction.jp/).

  <a href="https://smp.is-an.app/"><strong>➥ Live Demo (gh-pages)</strong></a>
  
  <a href="https://smp.rth.app/"><strong>➥ Chinese-friendly Live Demo</strong></a>
  
  ----------

# Essential Stuff

## Html import links

Google font

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

> ⚠️ 对于中国大陆的同胞，请使用以下的代码以实现正常访问：

``` html
<link rel="preconnect" href="https://fonts.loli.net">
<link rel="preconnect" href="https://gstatic.loli.net" crossorigin>
<link href="https://fonts.loli.net/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

Material icon

``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,-25" />
```

> ⚠️ 对于中国大陆的同胞，请使用以下的代码以实现正常访问：

``` html
<link rel="stylesheet" href="https://fonts.loli.net/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,-25" />
```

---

## Colors

``` css
--eerie-black_a95: hsla(204, 9%, 11%, 0.95);
--eerie-black_a50: hsla(204, 9%, 11%, 0.5);
--eerie-black: hsl(204, 9%, 11%);
--gainsboro: hsl(225, 7%, 89%);
--charcoal: hsl(203, 9%, 28%);
--silver-sand: hsl(208, 12%, 78%);
--light-sky-blue: hsl(200, 100%, 73%);
--prussian-blue: hsl(196, 100%, 14%);
--black: hsl(0, 0%, 0%);
--black_a50: hsla(0, 0%, 0%, 0.5);
--black_a20: hsla(0, 0%, 0%, 0.2);
--light-sky-blue_a8: hsla(200, 100%, 73%, 0.08);
--light-sky-blue_a12: hsla(200, 100%, 73%, 0.12);
--silver-sand_a8: hsla(208, 12%, 78%, 0.08);
--silver-sand_a12: hsla(208, 12%, 78%, 0.12);

--background: var(--eerie-black);
--background-opacity: var(--eerie-black_a95);
--on-background: var(--gainsboro);
--surface-variant: var(--charcoal);
--on-surface-variant: var(--silver-sand);
--on-surface-variant-hover: var(--light-sky-blue_a8);
--on-surface-variant-focus: var(--light-sky-blue_a12);
--primary: var(--light-sky-blue);
--on-primary: var(--prussian-blue);
```

## Gradient color

``` css
--gradient: linear-gradient(180deg, hsla(204, 9%, 11%, 0.90) 60%, transparent 120%);
```

## Typography

``` css
--ff-inter: 'Inter', sans-serif;

--headline-sm: 2.4rem;
--title-lg: 2.2rem;
--label-lg: 1.4rem;
--label-md: 1.2rem;

--fw-400: 400;
--fw-500: 500;
```

## Shadow

``` css
--shadow-1: 0 1px 4px 1px var(--black_a20);
--shadow-2: 0 1px 4px 1px var(--black_a50);
```

## Border Radius

``` css
--radius-24: 24px;
--radius-16: 16px;
--radius-12: 12px;
--radius-pill: 100px;
--radius-circle: 50%;
```

## Transition

``` css
--transition-1: 200ms cubic-bezier(0.2, 0, 0, 1);
--transition-2: 300ms cubic-bezier(0.2, 0, 0, 1);
```
