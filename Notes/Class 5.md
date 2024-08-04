We Created a folder Src . it is not mandatory .
you can distribute the files according to the features .

you can't just read the title from the folder and in the file you need to export it .

There are 2 ways of exporting : - 1. Default Export
                                  2. Name Export (Export directly (export it by name ))

Pic 1
Title is exported using name export and then you need to extract it from the header file and you have to use 
import {Title} from "./components/Header" // This is called Name Import 


{Title } This is not object De-structuring 

import * as Obj from "./components/Header" 
you can export everything from the file and you can use obj.Title  

you can also export both using name export and you have to write import command 
import {Title , Header } from "./components/Header" 

if one component is exported using name and other using default 
import Header , {Title} from "./components/Header" ; you can write this 

You can use different Names in export and import files like :-
import Header from "./components/Header" ; 
can be also written as import NewHeader from "./components/Header" ; 
but try to keep it same as it is good practise .
"./components/Header.js" (He Prefer) or "./components/Header.jsx" will also work

we also need to create config file => Put all HardCoded things in this file , call it constant No problem 

// Files ko dusre folders mai karna maine nhi kiya abhi kuiki api wala thoda panga 

Search Function 


React uses one way data binding 

we applied onChange function to the input function aur jab bhi input ki value change hogi woh call hoga (yeh ek call back function h )

onchange is callback function which has e as a event , when the input is changes the function is called 

Local variable like Pic  are not allowed 


React Variable :- is kind of state variabel. 
Every component in react maintains a state so you can put some variable onto that state . and every time you have to make local variable you use  state inside the react 

const [seacrhText] = useState(); Locl variable 

agr local variable bnana h toh you need to use these  state variables , those state variable are created using Hooks 

what are Hooks ? 
Hooks are nothing just like normal function at the end of the day it is function only.

This  useState is geting from react  using Name Export , the devlopers wrote for us .
import {useState} from "react"

Every hook has a specific fnc for it => to create state variables .
One of the Most imp Hook is useState Hook and it is used to create local state variable .


const [seacrhText] = useState(); ----> this returns array . the first element of array is its varible name 
searchText is a local state variable 
array => [variable name , setFunction] (fnc to update the variable )

and the de-structing can be also done in this way also Pic 


we were modifing the searchTxt like Pic but we can't do the same the local variable in react .
but we can do it with help of fucntion , the useState gives the function.

const [seacrhText , setSearchText] = useState("KFC") 
(setSearchText => Name of the variable in camel case)


How do i use this function (setSearchText), when we want to modify you don't do like this searchTxt = e.target.value
instead you do setSearchInput() and in bracket jo aapne variable mai dalna h woh daalo.


2 way Binding := reading and writing the searchtext at the same time .
e=event-> is passed when you need to read the value .

1:49 Creating this search proper work with the card 