watch 35 min tak ki video ek baar 

why is react fast ?
it has something called reconcillation , virtual DOM and diff algorithn. 

The current tree is compared with the updated tree and whatever is the difference that is reflected on the DOM .

Why do we state variable instead of normal variable      ?
because react doesn't track the normal variable , track only the local state variable 

Jab hum type kar rahe h input box mai ->
whenever anything change in state , it just quickly re-renders everything and it is doing it very fast , on every key press .


MonoLith :- old Java projects
MicroServices Architecthure  :- instead of one big project we have small projects 
Sepration of Concern :- evry small microservices have there own work to do .

1:16
API :- render ->api->update ui
useEffect() :- is a fnc , but you call this fnc  by passing  another fnc to it (callback fnc this will be not immediately called but whenever my useEffect to be called )


this anything which you want to do on some dependency of state variable you use useEffect .
without no dependency it will be called once .

[kai andar lika toh woh uspe depend karega] pic 1

render then useEffect(this is called after intital render )

whenever you have a call back inside useEffect with empty dependcy array it will called once after render.


watch cors video 
read optional chaining :


