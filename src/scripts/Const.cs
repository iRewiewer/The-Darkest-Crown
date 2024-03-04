using Godot;
using System.Collections.Generic;

public static class Const
{
	public static bool hasDebugMenuEnabled = false;
	public static Dictionary<string, string> Configuration = new Dictionary<string, string>();
	#region Paths
	public static string mainMenuPath = "res://scenes/UI/MainMenu/MainMenu.tscn";
	public static string playMenuPath = "res://scenes/UI/MainMenu/PlayMenu.tscn";
	public static string optionsMenuPath = "res://scenes/UI/MainMenu/OptionsMenu.tscn";
	public static string goldButtonTexturePath = "res://assets/UI/MainMenu/gold_button.png";
	public static string silverButtonTexturePath = "res://assets/UI/MainMenu/silver_button.png";
	public static string bronzeButtonTexturePath = "res://assets/UI/MainMenu/bronze_button.png";
	public static string queenDemoPath = "res://scenes/maps/QueenMap_Demo.tscn";
	#endregion
	#region Objects
	public static Texture2D normalTexture = (Texture2D)ResourceLoader.Load(Const.silverButtonTexturePath);
	public static Texture2D hoverTexture = (Texture2D)ResourceLoader.Load(Const.goldButtonTexturePath);
	#endregion
}