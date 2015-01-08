#pragma strict
var head:GameObject;
var headPos:Vector3;
var waistPos:Vector3;
var ang:float;
function Start () {

}

function Update () {
	//Debug.Log("head"+head.transform.position.x,head.transform.position.y);
	//Debug.Log(transform.position.x,transform.position.y);
	headPos=Vector3(Mathf.Abs(head.transform.position.x-transform.position.x),Mathf.Abs(head.transform.position.y-transform.position.y),0);
	waistPos=Vector3(0,Mathf.Abs(transform.position.y),0);
	ang=Vector3.Angle(headPos,waistPos);
	Debug.Log(ang);

}