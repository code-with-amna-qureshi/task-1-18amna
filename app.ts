#!/usr/bin/env node

 TASK 1
let personName: string="ERIC";
console.log(`hello ${personName} would you like to learn some python today?`);

// TASK 2
//====lower case====
let personName:
//task 3
// lower case
let personName ="Babar";
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase())); 
task 4
let quote: string="A person who never made a mistake never tried anything new";
let author:string="Albert Einstein";
console.log(`${author} once said,"${quote}`);
//task5
let quote: string="A person who never made a mistake never tried anything new";
let famous_person="Albert Einstein";
let message=`${famous_person} once said,${quote}`;
console.log(message);
//TASK 6
let personName =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//TASK 7 AND 8
console.log(5+3);
console.log(11-3);
console.log(4*2);
 console.log(16/2);

 //task 9
 let favoriteNumber: number = 8;
 console.log(`My favourite number is ${favoriteNumber}`);

//task 10a
// my name is amna
// date: 11-april-2024
// this program is just run a message of author
let quote: string="A person who never made a mistake never tried anything new";
let author:string="Albert Einstein";
console.log(`${author} once said,"${quote}`);
//Task 11

 let members: string[] =['sana','saba','ali','meerab','amna','azam'];
 for(let i=0; i<members.length; i++){
     console.log(members[i]);
 }

 // TASK 12
 let members: string[] = ['sana','saba','ali','meerab','amna','azam'];
 let message: string='whats your name:';
 for(let i=0; i<members.length; i++){
     console.log(message + members[i]);
 }

//Task 13
 let transportation : string [] = ['civi','bicycle','taxi','truck','van'];
 for(let i=0; i<transportation.length; i++){
    console.log('I would like to own a ' + transportation[i]);
 }

// //Task 14
   let guest_list : string [] = ['ali','saad','rehab','wahaj'];
   for(let i = 0; i < guest_list.length; i++){
      console.log("Respected Sir/Madam" + guest_list[i] + `\n\nWe invited you on dinner tomorrow.\n\nThank You`)
  }
//15
  let not_present : string = 'ali';
  let new_guest : string = 'Babar Azam';
  guest_list[1] = new_guest;
  for(let i = 0; i < guest_list.length; i++) {
       console.log("Respected Sir/Madam" + guest_list[i] + `\n\nWe invited you on dinner tomorrow.\n\nThank You`)
  }
  guest_list.unshift('shaheen','faraz','rizwan');
   for(let i=0; i<guest_list.length; i++){
     console.log(`Respected Sir/Madam` + guest_list[i] + `,\nWe invited you on dinner tomorrow. we found big table so we`)
 console.log('Mr. ${not_present) will not coming tomorrow dinner.')
 console.log('\unfortunately we can not arrange big table ,Only two people allow.')
 while(guest_list.length>2){
     let remove_guest = guest_list.pop();
     console.log
// }

//16-17

let guest_list : string [] = ['ali','saad','rehab','wahaj'];
let not_present : string = 'ali';
 let new_guest : string = 'Babar Azam';
 guest_list[1] = new_guest;
 for(let i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam"  +  guest_list[i] +  `,\n\nWe invited you on dinner tomorrow.\n\nThank You`)
}
guest_list.unshift('shaheen','faraz','rizwan')
console.log(`\nunfortunately we can not arrange big table , only two people allow.`);
while(guest_list.length>2){
    let remove_guest =guest_list.pop();
    console.log(`\Sorry sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for(let i = 0; i < guest_list.length; i++) 
    {
      console.log("Respected Sir/Madam"  +  guest_list[i] + `,\n\nYes you  are still invited on tomorrow dinner. \n\nThank You\n`)
    }
guest_list.splice(0,2)
console.log(guest_list)
//task 18
let places : string [] = ['Cape town','Delhi','Faisalabad','Islamabad','Quetta'];
//Print the array in its original order
console.log("Original order:", placesToVisit);

//print your array alphabetical order without modifying the actual list.
console.log("Alphabetical order:",[...placesToVisit].sort());

// Show that the array is still in its original order
console.log
//console.log('copy' + [...places].sort());
// show that your array is alphabetical order without modifying the actual list

console.log('original order:' + places);
// Print your array in reverse alphabetical order without changing the order of the original list

console.log('reverse alphabetical' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.

console.log('copy' + [...places].sort().reverse());
// Reverse the order of your list again.Print the list to show it's back to its original order
console.log('original :' + places.sort().reverse());

