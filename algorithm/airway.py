import os
def main():
    airway_intact = yes_no("Is airway intact?")
    if not airway_intact:
        intubation()
    breathing_questions()


def intubation():
    print("Manual in-line cervical immbolization \n")
    print("Pre-oxygenation\n")
    print("Utilize laryngeal manipulation to visualize cords as needed\n")
    print("Await Sedation and Paralysis Medication\n")
    print("Intubate orally\n")
    sucessful_intubation  = yes_no("Was patient able to be intubated?")
    if not sucessful_intubation:
        print("Adequate ventilation\n")
        print("SpO2 > 90%\n")
        print("Repeat Intubation\n")
        sucessful_intubation  = yes_no("Was patient able to be intubated?")
        if not sucessful_intubation:
            print("Cricothroidotomy\n")
        else:
            print("Sucessful intubation\n")
            print("Confirm Placement\n")
            print("Continuous end-tidal CO2 capnography\n")
            print("Chest x-ray\n")
            print("Maintain sedation\n")
    else:
        print("Sucessful intubation\n")
        print("Confirm Placement\n")
        print("Continuous end-tidal CO2 capnography\n")
        print("Chest x-ray\n")
        print("Maintain sedation\n")

def breathing_questions():
    print("Continue with breathing questions")

def yes_no(question):
    while True:
        reply = str(raw_input(question + ' (y/n)\n')).lower().strip()
        if reply[0] == 'y':
            return True
        if reply[0] == 'n':
            return False

if __name__ == '__main__':
    main()
