// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`. 
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и налога на примерных данных.

namespace Finance {
    export class LoanCalculator {

        calculateMonthlyPayment(
            loanAmount: number,
            annualInterestRate: number,
            years: number
        ): number {

            const monthlyRate = annualInterestRate / 100 / 12;
            const numberOfPayments = years * 12;

            if (monthlyRate === 0) {
                return loanAmount / numberOfPayments;
            }

            const payment =
                loanAmount *
                monthlyRate *
                Math.pow(1 + monthlyRate, numberOfPayments) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

            return payment;
        }
    }

    export class TaxCalculator {

        calculateTax(income: number, taxRate: number): number {
            return income * taxRate / 100;
        }
    }
}

const loan = new Finance.LoanCalculator();
console.log(loan.calculateMonthlyPayment(7000, 5, 5));

const tax = new Finance.TaxCalculator();
console.log(tax.calculateTax(5000, 20));