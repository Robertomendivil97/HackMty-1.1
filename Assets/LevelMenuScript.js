#pragma strict
var skin:GUISkin;
var btnTexture:Texture;
var levels=7;
var inLine=2;
var spacing=50;
function Start () {
	
}

function Update () {

}

function OnGUI(){
    
    GUI.skin = skin;
    var lineas=levels/inLine;
    var x=0;
    var y=0;
    var size=150;
    
    var xIncremento=200;
    var yIncremento=200;
    for (var i=0; i<7;i++){
        if (i%4==0){
            y+=yIncremento;
            x=0;
        }
        x+=xIncremento;
        //y+=yIncremento;
        
        if (GUI.Button(Rect(x,y,size,size),(i+1)+"")){
            Application.LoadLevel(i+1+1);
            }
        
    }
    
   
}