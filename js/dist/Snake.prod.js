"use strict";var Snake=function(n,t,e){function r(){return c++}var i,a,c=1,s=[];return i=n,a=t,s.push({x:i,y:a}),{addBody:r,getBody:function(){return JSON.parse(JSON.stringify(s))},moveBody:function(n){var t={x:s[0].x,y:s[0].y};switch(e){case 1:--t.x;break;case 2:--t.y;break;case 3:t.x+=1;break;case 4:t.y+=1}0<n.filter(function(n){return n.x==t.x&&n.y==t.y}).length&&r(),s.unshift(t),s.length>c&&s.pop()},setDirection:function(n){var t=n-36;65==n?t=1:87==n?t=2:68==n?t=3:83==n&&(t=4),t!=e-2&&t!=e+2&&t<=4&&1<=t&&(e=t)},checkIfLose:function(n){var t,e,r,i,a,c=s[0],u=c.x,o=c.y;return r=u,i=o,a=n,Math.min(r,i)<0||Math.max(r,i)>=a||(t=u,e=o,0<s.slice(1).filter(function(n){return n.x==t&&n.y==e}).length)}}};