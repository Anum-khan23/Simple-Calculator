"use client";
import { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalculator } from '@fortawesome/free-solid-svg-icons';
// import CalculatorIcon from '@mui/icons-material/Calculate'
import styles from "./Calculator.module.css"; // Import CSS module
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Calculator = () => {
const [num1 , setNum1] =useState<string>("");
const [num2 , setNum2] =useState<string>("");
const [result , setResult] =useState<string>("");

const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };
  
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };

const add = () : void =>{
    setResult((parseFloat(num1) + parseFloat(num2)) .toString());
};
const subtract = () : void =>{
    setResult((parseFloat(num1) - parseFloat(num2)) .toString())
}
const multiply = () : void =>{
    setResult((parseFloat(num1) * parseFloat(num2)) .toString())
}
const divide = () : void =>{
    if(parseFloat(num2) !== 0){
        setResult((parseFloat(num1) / parseFloat(num2)).toString());
  } else {
    setResult("Error: Division by zero");
  }
};

const clear = () : void =>{
    setNum1("");
    setNum2("");
    setResult("");
};
return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader>
        <CardTitle className="text-2xl font-bold">
                        <FontAwesomeIcon icon={faCalculator} className="mr-2 text-gray-700" />
                        Simple Calculator
         </CardTitle>
          {/* <CardTitle className={styles.title}>Calculator</CardTitle> */}
          <div className={styles.quote}>
        <p>`A calculator is only as powerful as the mind behind it.`</p>
      </div>
     

        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter a number"
                className={styles.input} // Apply input styles
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter a number"
                className={styles.input} // Apply input styles
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button className={`${styles.button} ${styles.add}`} onClick={add}>
              +
            </Button>
            <Button className={`${styles.button} ${styles.subtract}`} onClick={subtract}>
              -
            </Button>
            <Button className={`${styles.button} ${styles.multiply}`} onClick={multiply}>
              *
            </Button>
            <Button className={`${styles.button} ${styles.divide}`} onClick={divide}>
              /
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
              className={styles.result} // Apply result styles
            />
          </div>
          <Button className={`${styles.button} ${styles.clear}`} onClick={clear}>
            Clear
          </Button>
        </CardContent>
      </Card>

      <footer className={styles.footer}>
        <p>Made by Anum</p>
      </footer>
    </div>
  );
};
//   
  export default Calculator