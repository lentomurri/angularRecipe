currentNumber: number;
  oddScore = 0;
  evenScore = 0;
  odd: number[] = [];
  even: number[] = [];
  disabled = false;

  onNumberChange(event: number) {
    this.currentNumber = event;
    if (event !== undefined) {
      if (this.odd.length === 5 || this.even.length === 5) {
        this.disabled = true;
        if (this.odd.length === 5) {
          alert('Odd player wins!');
          this.oddScore++;
        }
        else {
          alert('Even player wins!');
          this.evenScore++;
        }
        this.odd = [];
        this.even = [];
      }
      else if (event % 2 === 0) {
        this.even.push(event);
      }
      else {
        this.odd.push(event);
      }
    }
  }
