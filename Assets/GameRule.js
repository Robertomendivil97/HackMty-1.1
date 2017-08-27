#pragma strict
var GameOverMenu:GameObject;
var perdiste=false;
var flag=0;
function Start () {
	
}

function Update () {
    if(perdiste){
        if (flag==0){
            flag++;
            Instantiate(GameOverMenu,transform.position,transform.rotation);
        }
    }
}
function GoHome(){
    Application.LoadLevel(0);
}
function  Restart(){
    Application.LoadLevel(Application.loadedLevel);
}