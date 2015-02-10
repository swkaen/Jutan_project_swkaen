#pragma strict

//headとwaistの傾きのベクトルを求めるための変数	
var head:GameObject;
var waist:GameObject;
var headPos:Vector3;
var waistPos:Vector3;
var ang:float;
//ここまで
var hlPos_x:float;
var hlPos_z:float;
//じゅうたんを動かすための変数
var vy :float=0;
var rotate_rate :float=0.5;
//0.0055*90=0.5
function Start () {

}

function Update () {
	//わいわい
	/*
	headPos=Vector3(Mathf.Abs(head.transform.position.x-waist.transform.position.x),Mathf.Abs(head.transform.position.y-waist.transform.position.y),0);
	waistPos=Vector3(0,Mathf.Abs(waist.transform.position.y),0);
	ang=Vector3.Angle(headPos,waistPos);
	Debug.Log(ang);
	*/
	Debug.Log(head.transform.localPosition.z);
	hlPos_x=head.transform.localPosition.x;
	hlPos_z=head.transform.localPosition.z;
	//わいわいおわり
	

	//vy=Input.GetAxis("Vertical");
	if(hlPos_z >= 0.3){
		vy = -1;
	}else if(hlPos_z <= -0.20){
		vy = -1;
	}else{
		vy=0;
	}
	transform.Translate(0, vy*0.3,0.7);
	
	if(/*Input.GetKey("right")*/hlPos_x>0.04 /*&& ang>30*/){
	    transform.Rotate(0,rotate_rate,0);
	    if(rotate_rate<1){
			rotate_rate+=0.0059;
		}
	}else if(/*Input.GetKey("left")*/hlPos_x<-0.04 /*&& ang>30*/){
		transform.Rotate(0,-rotate_rate,0);
		if(rotate_rate<1){
			rotate_rate+=0.0059;
		}
	}



	if(/*Input.GetKeyUp("right")||Input.GetKeyUp("left")*/ang>30){
		rotate_rate = 0.5;
	}
	


}