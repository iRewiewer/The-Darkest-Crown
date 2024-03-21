using Godot;

public partial class TempCameraMovement : CharacterBody2D
{
	[Export]
	public int cameraSpeed = 200;

	private Vector2 inputVector = Vector2.Zero;

	public override void _PhysicsProcess(double delta)
	{
		inputVector = Input.GetVector("camera_left", "camera_right", "camera_up", "camera_down");
		Velocity = inputVector.Normalized() * cameraSpeed;
		MoveAndSlide();
	}
}
