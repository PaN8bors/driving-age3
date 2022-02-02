import input from 'input';

async function main() {
    const drivingAge = 16;
    while (true) {
        let yourAge = await input.text('What is your age?')
        if (yourAge < drivingAge) {
            console.log('You are too young to drive.');
            console.log(`You must wait ${drivingAge - yourAge} years.`)
        return
        }

    const hasLicense = await input.confirm('Do you have your license?');
        if (yourAge >= drivingAge && hasLicense) {
            console.log('You can drive!');
        } else {
            console.log('You must get your license')
        }
        
        const goOn = await input.confirm('Would you like to continue?');
        if (!goOn) {
            break
        }
    }
}

main();