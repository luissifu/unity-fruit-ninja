#pragma strict
public var hit_s : boolean;
public var piece : Rigidbody;
public var score_t : UI.Text;

public var score : int = 0;

function Update () {
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var layer_mask = 1 << 8;
	
	hit_s = Physics.Raycast (ray, hit, 100, layer_mask);
	
	if (hit_s)
	{
		var other = hit.rigidbody;
		
		var left_piece : Rigidbody = Instantiate(piece, other.transform.position, other.transform.rotation);
		var right_piece : Rigidbody = Instantiate(piece, other.transform.position, other.transform.rotation);
		
		left_piece.AddForce(-100, 100, 0);
		right_piece.AddForce(100, 100, 0);
		
		var o_script : FruitPiece = left_piece.gameObject.GetComponent(FruitPiece);
		o_script.dir = -1;
		
		score = score + 1;
		
		Destroy(other.gameObject);
	}
	
	score_t.text = "" + score;
}