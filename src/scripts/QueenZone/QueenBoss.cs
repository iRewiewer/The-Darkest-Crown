using Godot;
using System;
using System.Collections.Generic;

public partial class QueenBoss : Node
{
	public List<Node2D> fireballs = new List<Node2D>();

	public override void _Ready()
	{
	}

	public override async void _Process(double delta)
	{
		if(Input.IsKeyPressed(Key.F12))
		{
			Image image = GetViewport().GetTexture().GetImage();
			image.SavePng(@$"C:\Users\iRewiewer\Documents\Github Tmp\The-Darkest-Crown\src\screenshots\{DateTime.Now.ToString("yyyy-MM-dd_HH-mm-ss")}.png");
		}

		double numberOfBalls = 110 - this.GetNode<Slider>("../balls/HSlider").Value;
		for (int x = -800; x < 300; x += Convert.ToInt32(numberOfBalls))
		{
			PackedScene fireballScene = GD.Load<PackedScene>(Const.scenePaths["Fireball"]);
			Node2D fireball = fireballScene.Instantiate<Node2D>();
			AddChild(fireball);
			fireballs.Add(fireball);

			double coeff1 = this.GetNode<Slider>("../coeff1/HSlider").Value; // 0 - 1000 ; step 50  ; init 100
			double coeff2 = this.GetNode<Slider>("../coeff2/HSlider").Value; // 0.1 - 1  ; step 0.1 ; init 0.1

			this.GetNode<Label>("../coeff1").Text = $"Coeff1: {coeff1}";
			this.GetNode<Label>("../coeff2").Text = $"Coeff2: {coeff2}";
			this.GetNode<Label>("../balls").Text = $"Balls: {numberOfBalls}";

			float y = (float)(coeff1 * Math.Cos(coeff2 * x));
			fireball.Position = new Vector2(x, y);

			//await ToSignal(GetTree().CreateTimer(0.05), "timeout");
		}

		await ToSignal(GetTree().CreateTimer(1), "timeout");

		foreach (Node2D fireball in fireballs)
		{
			fireball.QueueFree();
		}

		fireballs.Clear();
	}
}
