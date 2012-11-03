//---------------------------------------------------------
// Nom Document : gf_scroll_div.js
// Auteur : G.Ferraz
// Objet : menu flottant
// Creation : 01.01.2007
//---------------------------------------------------------
// Mise à Jour : 01.11.2007
//---------------------------------------------------------
// OUTILS /////////////////////////////
//---------------------------------------------
function Add_Event( obj_, event_, func_, mode_){
if( obj_.addEventListener)
obj_.addEventListener( event_, func_, mode_? mode_:false);
else
obj_.attachEvent( 'on'+event_, func_);
}
//----------------------
function GetScrollPage(){
var Left;
var Top;
var DocRef;
if( window.innerWidth){
with( window){
Left = pageXOffset;
Top = pageYOffset;
}
}
else{ // Cas Explorer a part
if( document.documentElement && document.documentElement.clientWidth)
DocRef = document.documentElement;
else
DocRef = document.body;
with( DocRef){
Left = scrollLeft;
Top = scrollTop;
}
}
return({top:Top, left:Left});
}
//---------------------------
function ObjGetPosition(obj_){
var PosX = 0;
var PosY = 0;
//-- suivant type en parametre
if( typeof(obj_)=='object')
var Obj = obj_;
else
var Obj = document.getElementById( obj_);
//-- Si l'objet existe
if( Obj){
//-- Recup. Position Objet
PosX = Obj.offsetLeft;
PosY = Obj.offsetTop;
//-- Si propriete existe
if( Obj.offsetParent){
//-- Tant qu'un parent existe
while( Obj = Obj.offsetParent){
if( Obj.offsetParent){ // on ne prend pas le BODY
//-- Ajout position Parent
PosX += Obj.offsetLeft;
PosY += Obj.offsetTop;
}
}
}
}
//-- Retour des positions
return({left:PosX, top:PosY});
}
//-------------------------------------
// MENU FLOTTANT //////////////////////
//-------------------------------------
var IdTimer_1;
var IdTimer_2;
var O_DivScroll;
var Rapport = 1.0/20.0; // On divise par 20
var Mini = 2* Rapport;
//-----------------------
function DIV_Scroll( id_){
var Obj = document.getElementById( id_);
this.Obj = Obj;
if( Obj){
Obj.style.position = "absolute"; // IMPERATIF
//-- Recup position de depart
var Pos = ObjGetPosition( id_);
this.PosX = Pos.left;
this.PosY = Pos.top;
this.DebX = this.PosX;
this.DebY = this.PosY;
this.NewX = 0;
this.NewY = 0;
this.Move = DIV_Deplace;
}
}
//---------------------------
function DIV_Deplace( x_, y_){
if( arguments[0] != null){
this.PosX = x_;
this.Obj.style.left = parseInt(x_) +"px";
}
if( arguments[1] != null){
this.PosY = y_;
this.Obj.style.top = parseInt(y_) +"px";
}
}
//---------------------------
function DIV_Replace( x_, y_){
//-- Calcul Delta deplacement
var Delta_X = (x_ -O_DivScroll.PosX) *Rapport;
var Delta_Y = (y_ -O_DivScroll.PosY) *Rapport;
//-- Test si fin deplacement
if((( Delta_Y < Mini)&&( Delta_Y > -Mini))&&
(( Delta_X < Mini)&&( Delta_X > -Mini))){
clearInterval( IdTimer_1);
O_DivScroll.Move( x_, y_);
}
else{
O_DivScroll.Move( O_DivScroll.PosX +Delta_X, O_DivScroll.PosY +Delta_Y);
}
}
//------------------------
function DIV_CheckScroll(){
var Scroll = GetScrollPage();
//-- New position du menu
O_DivScroll.NewX = Scroll.left +O_DivScroll.DebX;
O_DivScroll.NewY = Scroll.top +O_DivScroll.DebY;
//-- Si pas la bonne Position
if(( O_DivScroll.PosY != O_DivScroll.NewY)||( O_DivScroll.PosX != O_DivScroll.NewX)){
//-- Clear l'encours
clearInterval( IdTimer_1);
IdTimer_1 = setInterval("DIV_Replace(" + O_DivScroll.NewX +"," + O_DivScroll.NewY +")", 10);
}
return( true);
}
//-----------------------
function DIV_InitScroll(){
//-- Recup position Objet
O_DivScroll = new DIV_Scroll('DIV_MOVE');
//-- Lance inspection si existe
if( O_DivScroll.Obj)
IdTimer_2 = setInterval('DIV_CheckScroll()',50);
}
//========================================
Add_Event( window, 'load', DIV_InitScroll);
//-- EOF -- 