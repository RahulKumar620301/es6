users=[
{
    name: 'dev',
    uname: 'dev12',
    pwd: '1238'
},

{
    name: 'karan',
    uname: 'kr12',
    pwd: '1238'
},

{
    name: 'aman',
    uname: 'am12',
    pwd: '1238'
}

]

console.log(users)
console.log(users[1])
console.log(`name : ${users[2].name} | Login Info ${users[2].uname}(${users[2].pwd})`)




console.log('user info')
for(var i=0;i<users.length;i++)
{
    console.log(`name : ${users[i].name} | Login Info ${users[i].uname}(${users[i].pwd})`)
}

for (user of users)
{
    console.log(`name : ${user.name} | Login Info ${user.uname}(${user.pwd})`)
}