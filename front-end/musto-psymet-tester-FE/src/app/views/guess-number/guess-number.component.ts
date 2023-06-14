import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-guess-number",
  templateUrl: "./guess-number.component.html",
  styleUrls: ["./guess-number.component.scss"],
})
export class GuessNumberComponent implements OnInit {
  public formGroupEl!: FormGroup;
  public userScore: number = 20;
  public highScore: number = -1;
  public feedback: string = "";
  public numberToGuess: number = Math.trunc(Math.random() * 20) + 1;

  public ngOnInit(): void {
    this.formGroupEl = new FormGroup({
      inputNumber: new FormControl({ value: 0, disabled: false }),
    });
  }

  public onClickGuess() {
    console.log(this.formGroupEl.controls["inputNumber"].value);
  }
}
