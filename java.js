 console.log("You are here to develop your personality")
 let name =prompt('Welcome to our website.Whats your name');
 alert('Helo '+ name);
 var YourAge = prompt('Whats your age?')
 while(YourAge<10) {alert('you are to young to be here ')  }


 if (YourAge>=18)  {alert('We have the best psychologists for adults')  }
 else  {alert('At the bottom of the screen you will find a link, please use it ')  };

 var therapy=prompt('what type of theraby do you prefer: Behavior therapy or Cognitive therapy')
 
 
 

 var numberOfPictures=prompt('How many pictures do you want?');

 var pictures ='';
 var result = '';
 
 
 
 if(therapy =='Behavior'){pictures = '<img src="data:image/jpeg;base64,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"/>';}
 else if(therapy=='Cognitive'){pictures = '<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTExYUFBMUGBYZGBkZGxoaGRgaGhofGR0aGBodGhobHysiGhwoHRwaIzcjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHRERHDkpISgwMjAwMDkwMDIwMTAwMjswMDEyMDkwLjAwMjAwMjAwMjIwLjAwMDAwMDAwMDAwMDIwMP/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABFEAACAQIEAwUEBgcFCAMAAAABAgMAEQQSITEFBhMiQVFxgTJhkaEHM0JSscEUI2KSotHwFUNygtIWNFNjk7LC4RfD8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDAwMDAwUAAAAAAAAAAQIRAwQhMRJBUSJhoRNxkRQy8AVSgbHx/9oADAMBAAIRAxEAPwCE1s+A8u4nGNaCIsL2Lnsxr5udL+4XPurpHLX0VQxWfFN1n3yC4jHn9p/Ww91TuCFUUKiqqgWCgAADwAGgFdk9QltEEH5a+iyCKz4luu/3doh/l3f/ADaHwqcxRKoCqoVQLAAAADwAG1XapXJKUpcsFaUpUApVa1/FON4fDC800cfgGYAnyXc+gqI8V+lrCpcQRyzHuNumnxbtfw1aMJS4QJ7VqedUUs7KqjcsQAPMmuN8W+lHHS3EZjhX9hczerPcfACopj8dLM2aaWSRvF2ZreVzp6VtHTSfLB2ni30kcPhuBKZW8IhnB/z6J/FUS4r9L0zXEECIPvSEu37q2APqa55St46eC9yTbcV5pxmI+txEpB+yDkT1RLA+t61QNtt6pStkkuAd95Q4h18NG/eFAPwBH8JFbeuffRHxG8fTJ3BHqhuP4G+VdBrz8kemTRUUpSqAUpSgFKUoBSlKAUpSgFKUoBSlKAVZOMjz5M65r2y3F72vbztrbe2tXqiH6XhzNYzD/e5Ir3f6zWQxlMmhU7NfL9q9+zRKwS+lY0XEoGClZomD3y2dDmtvlse1b3Uj4lA2XLNEc9wtnQ5rb5bHtW91KYMmlYX9rwXAMgF3kjuQQM0QYyAkiwyhW1OmlXBxKEkATRkspdRnXtKL3Ya6roddtKUwZEkgUXYgD3kD8aI4IuCCPEG4rR8R4phmaO2IQmTspZiY2NnP1igqp7DjfuHfa9zlziEUmZUkRjlWTsP1FyksmbqDskkoQRe4y670p1ZH+Dc0pShJfpUM4t9KGBiuEZ5mH3Fsv77WBHvW9RLiv0s4p7iGKKIeJvI/mCbKP3TV44Zy7EnXyaj/ABXnjAYe4fEIzDTLHeRr+ByXC+tq4pxXjmJxH108sg+6zdj9wWUfCsCto6b+5g6bxX6YNxh8Mf8AFK1v4Evf94VEuLc84+e4bEMin7MX6sfFe0fVjUfpW8cUI8IkqTcknUnUk7nzPfVKUrQClKUApSlAKUpQEq+j3HGORrfZZZB7+5vlYetdpRgQCNiLjyOorgPK02XEL+0GX4i4+YFdq5VxWeAA7och8t1+Rt6Vx6iO9lWbWlKVzgUpSgFKUoBSlKAUpSgFKUoBSvMsqqLsyqNrsQB8TXoGgFQjF8swmd3MsysZHPsJlVnlMpcXO9my5rbLt3VN60ON5KwU0rzPCTJIQWYSSrcgBdlYAaAbVMXXcGhw/LMCBgZZSxaM58iEgxS58yFmJGb3k3Guu1e8JyzDHLCwmmzJIGLZVsxDLuxYnIcovfNpcjKa3B5CwB3hb/qzf66uQck4FNVht7P25Psggbt4Mfl4Cr9fv8A02M5dwsjGTtrI0kspcRpmPUFxG1zqFLDQ6HIRWFj+U4njkMcsodo5lIKois0vWJzBD9XmlawAJGliLm8lj5JwK5QIPZUIO3JoBlsNW/YXXfSvMvImAYgmA3Bc3Eko1di7bN3sSfdfSinXd/gGpk5fhLCQzYgSFpGLKsSm7rJETlAsnYJtbvsdzW25V4THC8jo0zMyqGL5LHtO2mXv1tv3Dxqh5DwH/Bb/AKs3+us7gfLuHwmf9HjydQqX7btfLe3tk23O1RKVrn4Bs6UpVAfNdKUr1CwpSlAKUpQClKUApSlAKUpQClKUBcw02R1f7rBvgb12Hk7F5Zil9JF0811HyzVxquhcuY49KCUe0oHxQ2Pxt86xzRtEM6lSvMUgZQw2YAjyOor1XCQKUpQClKUBQm1AagPF+LNPITc5AewvdbuJHid6v8F4o0LjUlCe0vd5jwNdj0UlC738GqwtqybdVfEaaU6q/eHxrG4O147jYsx+JNZwQ1xvYyLfUX7w+Iq1isSERmuDlBNr7nuHqawuP4powqqbE3JI8Bbx/retJNOze01+/u/LepUbKt0W+JY2aWzPk7IIAUadrQmzX128rVteWOJM9oSosiXB1voQLEevyrUsARavOEeSFs6ZSbEWPePLT8au1sRe5NaVp+AcRMxcMqgrYjKWFwbg6En3fGtuYv8AF8T/ADrNqiy3K0rym5HlXqhIpSlAKUpQClKUB810pRmA3NeoWFKoHG9xTMPEUBWr2DwryuEjGZiGIFwL5FLm1+/Kp079qsZh4jSsjhuPMEscykXjdX3sDlINifA7etHdbAyU4FOQh6ekkRmUllAMYIXNqfEjTftDxqzJw6Vc919iUQMAQSJTnsgAOvsPqNNPeK2eK5pzI0YhVQZEKdskxxJ0bQrpqt4Ijm/ZOmtXjzo7SF3QSWxP6TGrMLIVWVY1OVQXCtIrX0J6VtL3Gdz8A1y8vz9ZsOVRZk1KNJGt+zn7JZgH7Ha0J01qzheFTSlhGokKuiHIyMC0jFEykGzAkbjTvvas5OZAZoJ+koaKN4iFd8rgrJGhu5dgVV7G7NfKNqw+EcWEKOmXNneF7iRkI6Tl9GXtAm9gwIK2vrT1As43BNEQGKEMMyskiSKwuV0aMkbgi176Vj1sOO8XWd1IQqVXKWZkaSQ5i15GREDEAhR2b2UXJrXZh4irq63BWlAb1QOPEVIK1LeTJ7xMn3Xv6MP5hqiQNbzk2e0zL95PmpuPkWqk1sQdg5RxeeHKd4zl9Dqv5j0rcVDeUcVknynaQW9Rqv5j1qZVwTVMgUpXjEOVRmG4UkegvVUDBxnG442y2ZiNDa1h7tTvWXhMYkoupv4jvHmKhGetpy5iMswF9GBH5j8PnXTPAlG0ds9PFQtcoj08OSR0+67L+6SKuR164o4aeQjbO/4kV4Q16u7gmxjZN+XfqE9a2y1qeXfqE9a2y14U+WcYrFxWPjT23Ue47/DetbzRxQxgIpsSLkje2wA8L66+6oJjMQ7HxN+82Hj4G59O+tMGnlmbrZLubLGlFSl34RN5+asKNAM3otvmaYfmDCvugHvyqR621+Vc6ZmJ1vrtl1HuuTb+rbXtVtJzm0bvFjYjUi41G34612P+nqtpO/sQnDuvnc7DhEj9uNU171A19RV99q5/yrx5lcBjofaHyJ/xD5ip+50rz8mOWOXTLkicFGmnafBZXc+lYGF4urzPFsVNlP3re0PcQb+dZ67n0rC4jgMzI6qpZWuSTYm2w9//AKrHM5JdUe3byRj6W2pd1s/DLWOkkGIjAchDa47jYm/ytWxkkCgsxAAFyToBVrpKXDG2bLcLcX03I113GvlWHjOHSzG0jgR3uVXf3C5Gvjc9/dWMXki26u3t7L3L+mVJuklv7m0BpXjDwLGoRRZQLAan8a911L3MHV7ClKVIPmupZ9FJtjWN7Ww8puBci2TUA7monVVYjYkeVelKPUmix0nhPMaYidejFJNKmFkV58sEeIYsVIeND2GZACAD97wvemLdl4l+izOJI8Zh0jksixyKSH6bOFuOqp+0LaMNOyK5uDbUbjb3VtOW+GJiZhE+IMTuyhD0mlzsx2JDLl8yaxeJLfsQTLBY9ZsZikhRBLhoWhwUbZbAxEo5UN2TISARfu30Br3wb9NPEOHnHJCJSZ7EBROy9GX60RnJl2toPxqPw8oQu+JAxzFcLl6jjCyE5y8kZVUEl2sUvmF75vdrkLyEwmnDYlh0o4pQ6QPLI6zGRR+rDh1YZDproaq1Hfft4YNly/Hw84IAGY4f9Oi6nXEY1yLYHpm3T9m9/Fr6Vf40uLMXEBxBIxhFjl/R9IRle/6gQle0br973DxFRrl/lA4qWaJcR04oiq53iZczu2REMTOCjE3FiSRYC2tWuXOWFxTvBJiTDNF1P1ZiaUBY7ByGzqF7Vxl91Go23fwCU8f4Yv8Aa2HmxEdsKyxoWYDpl+m5RWJ09sLpt46XpjVxDYfFf2uqLErJ0CBGGDZjcQ9PtFctt9bX99Ro8rGXBz4uHEmaKJ7ZTEyF1VUZ37TnJlDtoQdEJvrasvD/AEfSuuCzz5DiSyhTGW6QEUkw/vBmuqAZbLbN321VHa3x7eNwS+aFy0yOUXh3THTIjgfDCPIpzl84kEmfMBa42PvrX8OjUrhSgQ4ocJiOGD5bGSxuQG7Jk2tf9ruvUd4fyP15nw8eJcFY+raXDSw3JYqBkd7gE/bF+/Q2rFj5UAihkxGIaEySPFkMLSGN43yBdHFwTc30At371FR4v4BtsbwrHYubBw45IBIztdgFGIMS3aQydM5AmUWU2GpHeTW+4tEmKmweKieB+ji1ibouHURu94i5A7LDsi3jId6gPNPCEwkxiXEmWRSRKek0WU2Qr2i7Z7hu46ZffWoVyNiR5G221X+n1JNP48km35x4dLFipzLGyCSaZ4ywsGXqMQV8RYj41hcGnyTxt+0AfJuyfkaxXcnck+ZJrzW6W1MHTYpCrBhupBHmNRXRMPMHRXGzAEeovXMsHPnjR/vKD8Reprydis0JQ7ofk2o+eauLKtrKm6kcKCSbAC5PlWvg43G7Ze0L6AsBY/PT1q5xtCYXt4A+gIJ+VRSmPGpK2dWDDGcW2V4zhOlKyj2T2l8j3ehuPSsZZipBBsQQQfAjas/mjFLJ0mB1Km/uN9j63rT5q9LDFyxps1jJ1T5LC/PvrIjq0663FXIzXTN2rKxVOic8u/UJ61tl2rU8u/UJ61thtXz0+WcZC+Z5OpK1vs2Uem/zJqPzQNuLjUHb0NidNtNa3vFZkeVmUdkn4+J9TrWNU6bXSw3GrV2e1+kjOEXxsiPTwk2QA6A2O2lx3nXNtqAe+sKYsL5k1LC5AW2g9jS5sAAb28dNqksuFU+P9eHhVnEYAEWGo+fnf+t69WGtwzaV035OKeiyRTdGq4c5BXtZho1/+4H4/PWuscLlzQoTvlAPpofwrmmHwpuRa2upPhv3+f410nhEJSBFIsbXI8L62+dcuulFyVO3W5jKDji9Xnb8bl5dz6Vp+b8fJFEOkcru2XNpcCxJtfv2HrWfiMfHG1nNrgEaE/hUL+kuXETdBsISwXqBwAA3ayZSM2hGjXtrtXHizYllSm19jNY5tX0uvseOA8Vn68ZkGexRSzDMw6jFQM5vlNrmw99dCFcM4jwjFRwCfESMl5AMocmRdCQ/ZOUbWAvfUbVOvoz5md0mw+IkLvA+VZGuS6Esoud2IKnU6kMt7m5rbUTwy9eOlHu0Vak3VOyc0rG/tKL/AIg+deo8bGxsHUk9165FmxviS/KJeOa5i/wX6UpWpQ+a6UqQ8rvhVjkE8iqZT0tUzmNChvJf7B6jRkNr9UwtrXpydKyxHqzOCcR6E8U2XN03V8t7Xt3XsbfCtvD+g2jSVUAEeHZ5EaUuZDLGk6+1lI6ZdrKtxluNa9Y6eEHBLfDDJNI0ohaRolVnhsSZCSQVU9/cdjcVVyvageOFc4PA+MkiSz4mRZFObRCsjyWIt2wc+UjS4v41mRc7xrLi5ehKBihFmC4hkZDHmuUkCZgDmGndY9xAHjiD4Z5J2keFjlPQPVDDNaUqrmJEAj9k2IuG6YzEFqzZocHhsSb9CPIwEeRpGezQSdTrhyVAzlMtrG50uL1m1Hx/NiDXxc7dGIxwYeMFpjMzTsZyWFihucpzKQpzEk3BO5qkfN6LjpcYsFuojI0fU0DMqqWDZP2b2tuTrWTgv0GN43DQKqy4UxsskwmyXvOZrtZWB+6BbW2lq1OKOGOHKqkYkWDDMHDSZ2lbKJ1YFithdjYAWK0Si+38YL/LvNxwsMcIjDqs7SvdrCRGiaFoyuU6a5r67DStn/8AIrGSGV4cxinllt1LXWSOSJI/Y0yq669+TYX0sHiWGXDj9XhnLRYRSn6wMWjLiUuFYEEAixB1zX10q3xGDhq4eXpEM4MgQln6mYSsI7C9mjMWU+zbUm4bSjjFveILZ5sQGfJHNebDtBeTEvK6liSGDMt7C/si3frTjXOb4mLDLJGOpA4dpA31hFtSuXssQBc6693dWNhuLL0II5AJFE7CSMKA7RBYcgDKA183Utre/jtWy/srDxfpEYEDtA8ERkneVUd3M7TH9WwsQFCAf8u+51VFcr+cA0PMfFf0rEyz5Mmdgct81rKq72F9r7d9a+pZLFwrpMUse21s7SrJ9cQg0v8Aq+lbXIe83z2FYvEIsF+mRBTF0ChzhDJkDfrMgZgzNluIszKR2SdFN6vGS4p/8JI7elSTGYuCPDzxx9ASuuHDiJpChYPKziIs2qhRESNVzE2vYWjdXTsE05TnzYcDvRmX/wAh8iKlfKuKyTgHZxl9d1+Yt61A+SZ9ZE8QrD00P4rUpRiCCNCCCPMaiufJHdoqdINQbE2WR1GyuyjyBIqZ4XE9SNZB9pQ1vfbb46Vz4zkksdybnzOpqdHBycjp00ulsyiQRqAawcQMrWG29XhJVsKHljVjZSyg+ROvlXoY04/Y3ySTjYgw0knsI7DxAJHxr00TIbMrKfAgj8al8iWFhoABYDQb6jw2ta9Y2OiDQyZrkKpIJ3BGa2+xIC3Hv2F7Vz/q23VbHPGe5seXf93SsviOGaSMqrZSRa/u7x6isTl3/d0rbDavLycsxTadogeMw5R2UkEr3jbYH86s1teardbQm+UX92+3pWqrl6aZ9Jgk5Y4t90KoTVL1SrqJvRsuWMMHnJIuEF/Nr9n4XJ9RUyk2qG8oy5ZQPvg/H2vytUl43xSLCwvPK2VEFydybmwAHeSSAB761S7Hga+/q7+DR81/WL/h/OtQprW8yc7h3usBAUlRmcXax3sF0Hqa9cP4wkuYBWDgXy6nNpfs2Fyfda/uNZ5cE0uutjs0moxqCg3ujY4rCpPC8UgJU223HeCD4ggGq4LhCQsZFChmjRHIzdoporamwuN9N+81eCMqjOpVmsbHcD/9/Crk84sbGvDySknKEX6X2/2auEZTUkeC9eS9Wi9eQSTYC5OgA3NcygzakTLheILxox3I18xofwqtU4bhzHEid4GvmdT8zVa+oxJ/TV+D5zLfW+niz5zqc8uck4WbAx4yeeePMzKQihtesYUCqEZmLNlFhfVqg1T/AJa5uwCcPjweKjlfK7MyhQUNpjMgN2Fx7NwRY6jUV6Obq6fTyC5FyVwt75cbiSF6YZsnZUyFAgZullVu2lwTdQ1zYVQclcLtmGNxBXp9UsEugXJ1dXEWVWMfbCk5iLEAg1lYnm/g7tIzQ4n9ZC0BABCiNwisiKHsgsi6C1iCRYsxPvF858JkMhKYsCVSkioWRHvGYrsiyBS3TOW9vsr3qtue83uQYeJ5J4XGWVsdPdSQ1lDZAEjkLOViOSNVljJkNlGcXINXMbyRw5R1JMdiWzNKt8vUb9S3SmZssZIRGFmc9kaa2IqsvNHBWL/qcQvUzZwgKB1dYkdGVXAKMsUdx7j4m/qXm3hDAjJjACZT2SyG2IbqTKCsgIV21K+IFrWFLze4La8h8MJYDGYk2dY82TsFnkWEKknSyOeowU5ScpOtq8f7FcL6LzHHYkRJlu7JlUhzZGUtEM8Z7nW62BN7A1dXmfggbOIJwQwZdNFtKuIIRc9lUyorEDS9/E39f7V8H6axGPGGNbZUZpCigI8YVVMtgoV2Fh7vAWXm9wVxf0c8PijllfF4nJGSJGChsmXVrhYybAG5OwFYkvJvC1ZlbGYoMuW6mJg13MQCqDDdnvNECouR1FuBWwXnfhYhmgK4to5VKuG1uCuRrEvcErufWrGM5p4NK8sjQ4jPKUMjBQCxjaJ0v29lMSED/F943Xm9weJeRuGx9UnG4oGBUklst2jVxmViFiuLDtHvUWJtVBybw3tA4/EgmaOJlYZWMki50DI0YJYqxNyNLt76uvzbwc9QmLFEypJFIde0soVXB/WWGiIARqAotVZ+bODPKZmhxPULq5Nj7SdPIbZ7adNbf4n+8115vcGNHyTwtgpGNxAzoJEDJlZkLKgZVaIEgllGg7wdqrh+RuGyMiri8XmdpEUGJgSYmCSXBhGUK7BSxsA2l76Vcj5l4KEjj6GIKxBBHcap02LpY573uSCe8MQbgmr7858Jbp3jxVkleZRqB1Hl65YgSWJ6mo8ASuxIK83uDBxXIeCOExGJhxGJbpJI2V0EZzRpnyujxqw0t4aGuf10/i/0g4FsFNhoUnBeGSNLotrurAXOba53rmFdGHrr1kmz5YnyYhPBrqfUafMCpvXOYJSjKw3Uhvgb10VWBFxsdaZFuQyXcmYrNG0Z3Q3Hk2v43+NYXMXAlN5YCCSe0oIN7nUr67isLlnF9PEL4P2D67fxWrdwJ053j7jqv4j5XHpWEZyxz6okKTi9iMScKnC3yZNtWK2Gov2cwLG19BVjEYVgBnttutiPkTbyNbPiMzvK176MVHuANqsRNnJAt3ge+w0Hrt61p+uy/UtJV4Paho7x3J9rLqcwyXCiNGAFgDmZtBuTfU+lWcXxaSYBTZV+6osPXxrCkxC2IVbX7z+FeYjXoY8afqca8HD0RjKk7J7y+wGHQnQC5JO1cp4r/akTtNHicUwcyMwz3CWdsuWMORbJlIsote2mw3HPMc6QYeeF5FGVkkCMwFrhkLKDYi5YXPeRVzhHEA0Ebu65sgzHMuhGhJtsb629/dXjZeqL6o1zwW0mGORyUuTA4f8ASBG8cYxccjSKAGlQp2lvozKQNQPDe3vtXS8Ny9CupBb/ABG4+AsKiHBuRsHOVxJ6jBmLZFZek1mI2VC2UkbZvlU9Ezfd+TfmBUTUXukZ5MsoeiMnsRXmdAJgAAOyugHvPcK14wznZHPkrH8qnd2ttr5D/VXnI/jb4D8jVKOjH/UJQgo9PHuQzheEmWVT03FmB1Ui63GbfzI9RXj6aZ8uGgVgxRptQCBchHKgmx03P+UVM5cOW3NiNQQdQfEaCsPjHDRPEYZVzAkEOtiVYahgrG4IPcL9/jV06aZzZ9Q8zTaqjj+JjWTK3TNlAVyXI7hqNO1fQXq7wrFA4iEwLLdJEIyrnzG4GthcAi48iay+Lcn8QjmYxr1gxPazBAFOylHIINvC9Z/LPK0uHlE79ZW2yxk2UH2rldX07tvlbpuotLfxv8EJxk9qXm9ibc8wE4VmQkNGVbTe18reljf/ACiudfpcp/vH+Jqfx8fgxQkhGcF1eOzL7V0J0sTbTXW1RiHlfEHeMDzZfyJrfSwxRtZYq/dGDlNbJv8AJqVlk++/7x/nWRhcVKjBkkcMO8Mf6I91bmPlHEd+Qerf6ay8Pyc9+06ge4XPzrpc9NHx+Cep92STgmN6sCSONWBvba6kqSPO1/WlX8HhumioAAFFgP676V40mup0VPnOlKV6ZYUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFTvl+fPh4z4LlP8Al7P5VBKlfJU943T7rA+jD+an41nNbEMkANtt6luMmzpDiF3sA3qbW/ezD1qI1vuXZTJC8Gl1ZXF/DMCfmP4q5si7lWZc4gmzBhkY6E+yfjtfzqN8wcAxiKBhgJMxsSGVWA9wcgeoN/d4TTFQZ/aQH01+I1rD/RHT6tyPcdv69Kzi6N4avLCLinsc04lytj4IjM2bKurZJCzKO8st9QO8i9t9ta2XIBXFM8UrPnVM6lbdpQQrA6aEEr5392s8TibLpLGfNdv69a1XDuUOhjFxOEdFikuJY2UkBWsxMRHsksq6HQd2gy1stRNJ70QsvUtyA8J4Ri8e8rplvGBfPcWPdGDbQ2zGxsBbW16q3JuPkJj6BViBclksoNxe97HY7eFdsCjc21rElyBmZZFLWAK3B2uRtqD2jWCl5N3rJbpceDD5VwT4bCwwMQzImUkHQm5Ommwva/urZmZvd8TXhTcXqtVZxt27KmRvEfD/AN1S5+8fl/KlKAp6n4n8qZRVaUBQC1ecQ1kY+Ck/I17qxjMF1FKlnAO9suo7xqDoRp4+8VK53BE4sKYMLBiVHajcyMPvJI1v+3KP8xqZK1wCNjrWLi+FCSNo72Vly6AaA6aelZEGFygC+gFq1y5fqbvm3+H2BfUCvVeOnXpVtWIK0pSgPmulKV6hYUpSgFKUoBSlKAUpSgFKUoBSlXIIWkbIis7HZVUsx8lXWgLdKlPCvo54hPYmIRL4ytl/gW7X8wKlvCvohhWxxE8jn7qARr5EnMx8wRWUs0I9wcpJtvUn5P4biFZ5TBKISmrshVb3GWxNs25Gl9667wjlbB4axhw8asPtEZn/AH2u3zrL4vhupDIneVNvMaj5gVhLUXskQc6rP5fxPTnQnZjkPk2n42PpWBSrNWqIOjmOvBFeOFYrqwo/eRr5jQ/MGsmuUg1HGIT03sDqp28RrVxL2AF7eA/lWzKjwqnTFTYo1/SbwphoGV3YgEOV79eyLVsMgqtqWKLQFVyGrlKgk8dOqiOvVKApkFVtSlAKUpQClKUApSlAKUpQHzXSlK9QsKUpQClKUApVRuB3nQDvPlW94TyRj57FMO6qftS/qx8G7RHkDVXJLkGhpXS+E/Q+dDiMR5rEv/2ONf3Kl3CeRcBBYrh0Zh9qS8hv4jPcKfICsZaiC43BxPhfBcRiPqIZZPeqnL6ueyPU1LeF/RNi5LGaSKEeGsj+oWy/xGuwKtttqrWEtTJ8bEEM4V9FuBisZBJM3/May/upYEe43qVYLARQrlijSNfBFVR8AKyqpWMpylywVpSlQClKi/MvPuEwl0L9SUf3cdiQf222TyOvuNcx5k59xeLupfpRH+7jJFx+2/tP8gfCtYYZT+wJXjowsjqCCA7AWNxYE2qzWm5QmzYcL9xmX0PaH4/KtzXQ1WxBJuSsVo8R7u2PXRvy+NSSoFwPF9KdG7r5T5Nofhv6VPa5pqmBSlKqBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgPmulKV6hYUpSgFSDkPhUOIxIjmTMhG12XvHepBpSqy/awdr4VwLDYcWhgjj96qMx823Pqa2FKV5bIK0pSgFKUoBSlKApXMPpj43iIpIoY5XSN0JYKcpJHiw7Vvde1KVpi/egcyFVpSvSJJNyO2kw96/8Al/KpJSlc8/3ECujcPa8aE96r/wBopSsMvYguUpSsgKUpQClKUApSlAKUpQClKUApSlAKUpQClKUB/9k="/>';}

 else{alert('choose between Behavior and Cognitive  ');}
 
 for(var i=0;i<numberOfPictures;i++){result+=pictures;}
 
 
 document.write(result);


 