---
layout: post
title:  "Native vs custom selects"
date:   2017-03-22 19:21:33 +0100
categories: blog
author: Tom Nick
excerpt: The native select element is the only input left where it's not possible to fully customize it. It's impossible to change the look of the options without rebuilding the whole select. Is it worth it to rebuild it? If so, when should you do it?
---
When you are a frontend-developer, it probably happened to you that your product-manager wanted you to change the select input styling. If this request was your first time, you quickly noticed that you can only style the element the user clicks on, but not how the options are rendered.
Defeated you tell your product manager that it's not possible with only CSS. There are dozens of JavaScript libraries out there, which
completely reimplement the functionality of the select input and give you the ability to style it.
But... is it worth it?

In terms of implementation and features, selects are probably one of the most complex UI-elements in the browser. We often overlook which features it offers, because often we don't even think about when we use it. But let's quickly list things you might forget:
1. Especially smartphones implement often their own select, for example is the select in iOS Safari highly optimized for touch input, see the picture.
1. It will always render appriopriatly, which means, you'll always be able to click all the options: If it is on top of the screen, it will render below the cursor, if it is on the bottom, it will render above.
1. When you type inside the input-field, the selection will change according to the characters you entered.
1. You can use the keyboard to control it.

So why even bother to reimplement it? Users like to use stuff they know how to use. Every user will know how to use a select.
The only reason is that you can decide the UX and the look.

## Examples
I reserched a bit and looked on multiple websites and asked some other FE-devs about their opinions. Below are some selects of some of the biggest websites in the world.

When you look at the biggest websites in the world, you'll notice selects all over around:
{% include image.html image="selects/facebook-native-select.png" alt="Facebook has the manpower to do basically anything, but they decided it's a good idea to use native elements in their settings." %}
{% include image.html image="selects/google-native-select.png" alt="Same as Facebook, the gmail settings exclusivily use native selects." %}
{% include image.html image="selects/airbnb-native-selects.png" alt="Even airbnb, known for their drive to create the perfect user-input element (their datetimepicker is probably the most advanced ever conceived), use selects were appriopriate." %}

The pictures should make it clear, that even the big players, who can afford to rebuild a select in every programming language ever created, that it's not worth it for things that are just a simple select.

But... there are some custom selects... or are there?
{% include image.html image="selects/airbnb-custom-select.png" alt="Airbnb select for how many guests will arrive is a perfect example. You could have solved this differntly, but never as smooth as this custom select." %}
{% include image.html image="selects/google-custom-select.png" alt="This is a select as well, but the benefit of this custom select is clear: By using the icons, the user can grasp much faster what he actually wants to select." %}
{% include image.html image="selects/google-custom-select2.png" alt="This menu of gmail could have been done as a select, but there are mostly only 3 options. In these cases a simple menu often improves the UX. IMHO a select here would have been slightly worse." %}

## Conclusion
After looking myself of how other websites do it, and some good discussions with other FE-devs in a slack-channel, this is the conclusion:

1. When you can use a simple select, do it. Accessibility is good, users know how to use it, it works on every platform.
1. When it's actually not an option but more of an action (language select vs. edit/delete) use a dropdown.
1. When the functionality is super specific (refetching data when you type) or the UX hugly benefits from it, use a custom select.

Despite this, here are some nice projects which reimplement select:

* [react-select](https://github.com/JedWatson/react-select)
* [jquery.selectBox.js](https://github.com/gfranko/jquery.selectBoxIt.js)
* [select2](https://select2.github.io/)


