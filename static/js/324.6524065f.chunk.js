"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{9324:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a,r,c=n(5861),u=n(9439),o=n(7757),i=n.n(o),s=n(2791),f=n(7689),x=n(1207),p=n(2246),j=n(168),l=n(5867),d=l.ZP.div(a||(a=(0,j.Z)(["\n  background-color: #BBBBBB;\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 8px;\n  font-family: Geneva, Verdana, sans-serif;\n"]))),R=n(184),b=function(e){var t=e.review;return(0,R.jsxs)(d,{children:[(0,R.jsx)("img",{src:p,width:100,height:100,alt:t.author}),(0,R.jsxs)("div",{children:[(0,R.jsx)("h3",{children:t.author}),(0,R.jsxs)("p",{children:["Rating: ",t.author_details.rating]}),(0,R.jsx)("p",{children:t.content})]})]})},m=l.ZP.ul(r||(r=(0,j.Z)(["\n  padding: 0 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),h=function(){var e=(0,s.useState)([]),t=(0,u.Z)(e,2),n=t[0],a=t[1],r=(0,f.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Hx)(r);case 2:t=e.sent,a(t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,R.jsx)(m,{children:n.map((function(e){return(0,R.jsx)("li",{children:(0,R.jsx)(b,{review:e})},e.id)}))})}},1207:function(e,t,n){n.d(t,{Hx:function(){return x},Ny:function(){return i},Tg:function(){return o},Y5:function(){return s},uV:function(){return f}});var a=n(5861),r=n(7757),c=n.n(r),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org";var o=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,u.Z.get("/3/trending/all/day?".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85",include_adult:!1,query:t,page:1}),e.next=3,u.Z.get("/3/search/movie?".concat(n));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,u.Z.get("/3/movie/".concat(t,"?").concat(n));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,u.Z.get("/3/movie/".concat(t,"/credits?").concat(n));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85",page:1}),e.next=3,u.Z.get("/3/movie/".concat(t,"/reviews?").concat(n));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2246:function(e){e.exports="data:image/jpeg;base64,UklGRnIMAABXRUJQVlA4IGYMAAAQlQCdASpYAlgCPlEokkajoyGhIvS4UHAKCWlu8SAV1dkn0jaMlIzz72jeX9e0Ao7gXaH8r8Qe9KDifcuqD+DMiUxz0l+/q/FB7+W5ujjHiNHGPEaOMeI0cY8Ro4x4jRxjxGjjHiNHGPEaOMeI0cY8Ro4x4jRxjxGjjHiNHGPEaOMeI0Teq7t6sQzq04D1E0cY8Ro4x4jRxjxD3CpjgWtzZDv+mrUu8LQSRa+C69RqRTAx7D6FjA8tPLc3RxjxGjjFJP7W9D/5kJ5atwg/Ddqy2IKtPLc3RxjxGjjHhI1rhnxNKYiO8tzemA0hY8eZGNIweZkZi/KvlKcPEaOMeI0cY8Q8tdkjJG2jjHiNHGKCkWJiuiaOMeI0cY8RCAG8xYlA0cY8Ro4qknpS199RNHGPEaOMUyTqolv/fCIEy3NjZ9QMfBjb2+B6iaOMeI0Tr5o0nWCEV/lSDyQw/jmCDDiEKH/pF+BfS3EaCy6rt95Ak1BZn13yiKn1yfUTRxjxGjjFL8GpoWyVskFrG+XRaiebD82RGPvjy3N0cY8Rlqx01zolE0cY8Q+TCQ9vZV7K3N0cY8Ro4xRwhUxTwPVYhubo4x4UqRXNsR+Oaanm8tzdHGPEZX3EMpydB6V5vLc3RRt6pJ/q3lA+j+5W+PLc3RxjwmXotUC2ThzA8tPLcnOC/FmHBCZQhYmjjHiNHGPCbFqM3V+tkPtN0cY8Rom+DeIVTQZWzVubo4x4jRxitC5Mcb8WiBSwAEPEaOMeIfmw5uSx0eVcJo+Wnlubo4x4jeRgi6wjQ6Vvjy3NfwMdgm2NAcY8Ro4x4jRvAB71MSERjxGjjHiIY01DMtPLc3RxjxGiiuw1fZ/pW+PLc2FXS0LOb48tzdHGPEZdSfLsh5aeW5ujd7dHh6MDy08tzdHGPCjD/33e7sh5aeW5uXXHco8ADy08tzdHGPEaKOtIv1ry3N0cVyK9GbTx5bm6OMeI0cYq+nXz3VAeWnltBWDgc9RNHGPEaOMeI0UWxy4LLsFE0cY62ydftoFE0cY8Ro4x4jRu8t09xtIPLTy3J2DZG/VOHeamRaWnlubo4x4jRxjwmx48kPos/prpxvjxLE40tTcdsJ0h6iaOMeI0cY8RonUXwdgNFfZ0CfqWf49AYMMYbJK8tzdHGPEaOMeI0UZgufQCdD6u0/eoZ6dofQvsC4iuJ/hOn5wPUTRxjxGjjHiNG79IrO6jQJHOoanfN1kCCs6nBDstzdHGPEaOMeEvBzZJf/y0OQeozUDKF7MkcojwYorRLtW7RlZRHSffyeI0cY8Ro4rgLnvfi4916H3leOYI8gJ3HyrlAyhezDicGnqQI19E/z4jgwoOKAlp5bm6OMUhKcmvGrzH791pm7B174FdPmIh76muT37A6/4tIQUrRtG6qOFL2s2BMVCS7y3Ny/EH1f7RJ4wZesaeW5r+huWttX0Sa5h6mqu4AnmjnvLc3ROPoksMGEEGrOP9Jy0S8OflTlNnEaOMeI1N/APLTy2bPUYty0npFEKzQMXwgly19YmjjHiNHGPEaOMeI0+6W/66QLaVt2hYl/2GO+KF8D1E0cY8Ro4x4jRxjxHS3pHr0HAAAP79kAAAAAPQ9MFjj5aGxQElgaHRlOUTYRZ9bWlz9t6k7bnIKBW+zMgG6x7h7tYceI3hFHzoWVTVoIPcUmczQEFuCV58GNWSWoYMYaEPH5mms9KHL9r898H348oSdDEN3np6x7xzAUkKUJlm1kFJZP+1akSBrouvTucxKL0D8TYrxBFe3ENpGG5xd+4fM+Vdqi0PtG7tBfoTxgXGVl8nWNsX+4XfbFmlkqHGt/En9pqINlCkfLNaRXcH9mTghJ0/m1uCHmuyQXYoeU5IGxIERnioqBxZF/batMHRZPCNVn5WaWhXhHiMlAdNvW8b8cTAfHLYS+zOeXtmatMQGK4LP4JGP1IxdQcN8uIDxKCMC4PcOjCVqS9nkOqcRrqt/yLLq/4XryrZIaZRmWdLjhlLeMV7XM1NyLklhmAkgrvTPlStCrlXLemjyFqxmApfwZWfs2D/Rx2ze02hgqweKs/3bJrxIk7l9Adt9rr5ecyjIX2AAHbyl8r4MbVPJJCLMrzzraC4ZvCq1gSwRHoy2RTkqMcAkeHvQMQ58klvpvqxZXbvVjvXYdzwCTuK01ZA5N/Wz6zJdL6zcI9GI9rpLTQftWxMftzTc6FjMAkBVvMIffQOzOyGKfpB+a399ZvPNA28Qywxpc9FFAWLfwlkcNzLRDUK2itpo3nSL07nHWb5IPDZ37/JCRTbXoVvK+bStD000JnlnpxBfvB6K0fngTn2EvpzRQy4hBFct3JGYVeP0ESFGo61H9T7MW9Q3eWGhFduklrPb/YqE8i/pJDl6Usnst4tPv73j+yHvAfFct1FxHG4XeI1nIxUWPiIE0s4RDWb2uLmOxtvmtQWBAbKyw8T3hCgNVi5gXONIXbHWHFNjOwQ8cXQDSi3tBc4rV0o8wN5R/wmYOzhJLQlrTmzQXjMZWRZMJYha0W+bFWmMLYg4qb+1AVUMYKFVuC62JUkkh7Ia9BgoVQryFbiFf7+nJZ49nWUlARLaPjaKwMxhvLbDrqtxazUcSjJmWuJjcec4sjz4hQ61oP84Yj2mSaogJ+xO/l35CAaoqtvQ1LSdB5T3VEgFk0fpsG1McEmUgCUEs1XuWVllEtfjOULBGNF0NEoggvGphjw6Wfb1L1pTBnHmYZ5Qw5PtfvUJ8L1OVSWwx41Cjedbmdjqy2CKmg36oh16T06BiCpQdKXpuCDm/5bDWolrkkHep/zJVUEXISnwMImkNnEmEkWutsCpSudH0GrsdrZU184RPedoaj6ndGxKyXlluBVDGytQUcKODpmIl4EM4c1eucqOS2yDrhE3d76otsU5ibI5qvujuvF6pHy0SXlky7oACo1bxQtumxJPVkSnAWZBrAqYSqlbkwaCdapJ2ykNU4grHU+8es0LBehfsUQMgLpxxLMRlIaj+rXtziyYaDL+RTDtanIGR21CcLscEJCtZMfLJIHUGG23STjZUQ7nk+fF1HaQTwuYS2Md3pwArbhOe3YcI8laSHxP6ZvemIYQw6L3BxcPQikvBJEQxDSJhcy8gHIigzRDf0piX6BneAU7J2AKYeHuIxJB2NMjV7XwLvN4Pppb1SDiFTblARF3L+R4YgHyBSm+GTVkLgcw2O5WvyyP7N2pwRT1l1kk03CNRxRGGhostbZnPe3QuCdye8K5Pi60sgji4j+tIEka/RdtLWPF57ShgVAiWL2+2qkzL3IOJaJTicLTypm9yCXyQweBNjKmQsRrZv87sImD9OPrFj8UY7ynrflwo0/BOi+72w5lKh+ypAGQNS6bMLJBMXSHGf2q2THeX9QxjvDdZW0KsugCyHA7wumEVvbhNJ4mXaPRXRS+30ChlKpY3ZXRz6REZZDQBASccybJGkwmLrOYIma/mKUsI3TEJEnEbzDGXoNDoHD22Vkl3fH1V1aFq+lr3pjrbQ0Bk8Zfs47zfaw6Bo9Qc6da/IwBTTH0HTlPAxfRh2f4KPpt6Fl7UZVXmMcBQaR0l6FFEtNdN+W2E5OnUmVabblEOKzlD8XzgRast8L+OxgOZJ5GOwVVyNOWEfl6X1gRB4eI0rGkYj3CsM25NquZTAeaxokbALiDzuMIQUfaU76B8Fxpo1vQc0jsIs3NyoqgKOrtmbtOgbzujubuzEfv5MXGtcqp1ZtK3yYmSZrOSXGCouHPqjRIX/17xEWeI8WRUUM/x717aXDD3zf2cruz80yd5No6BQ07w9j/ko93lQ9WkpKEAYXiWCtI/9oxw5oCM//IaZG1sDh8EQVCx1m7a9Jy2gJZomCu/twM8YfOoGCHQT8UxW2KxlSfBw3yXgXgw0ErQvxBSTFWbBeTAv8ijtMJpbqtItERXG9zRS/RgLGg/fwF8bBVDvNe4XlC7oj7p6ljVgMBgy6iWko7j0CSVnRNyaDzAVQT7QTHGCdQd1JZUGgfVgAA3Y35+po2dtNnwyA8GCTAQu8mhK6XWxJ6AJPmhke+qMVF4cxvhZC6m1WSH+Et/56dXBFUTW7Fu80i77ATRgXRRNmbfafZT3NDTsFFWIFh0YMIaAJGpfcXOo8qhU/i4ngzvqkV7WzIJ9tb8xYOCRzxNJ6REJ8QBQ20p6rhTwrjn6mjCtGYjEtmBKsMwav9qX4pe+vsa2JjbX3wMagFK0sNHBPebipgAA="}}]);
//# sourceMappingURL=324.6524065f.chunk.js.map