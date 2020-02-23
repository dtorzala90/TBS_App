from django.test import TestCase
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pathlib

def click_element_id(buttonName):
	element = driver.find_element_by_id(buttonName)
	element.click()
	time.sleep(1)

def set_value_element_id(fieldId, value):
	element = driver.find_element_by_id(fieldId)
	element.send_keys(value)
	time.sleep(1)

def click_button_name(buttonName):
	element = driver.find_element_by_name(buttonName)
	element.click()
	time.sleep(1)

def goto_decision_app():
	element = driver.find_element_by_tag_name('h4')
	element.click()
	time.sleep(1)

def goto_summary():
	element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
	element.click()
	time.sleep(1)

def check_alert_thrown(alertName, shouldBeThrown):
	alertThrown = False
	try:
		element = driver.find_element_by_id(alertName)
		alertThrown = True
	except:
		pass

	if shouldBeThrown and alertThrown:
		print('CORRECT', alertName, "was successfully thrown.")
	elif shouldBeThrown and not alertThrown:
		print('ERROR', alertName, "was not successfully thrown.")
	if not shouldBeThrown and not alertThrown:
		print('CORRECT', alertName, "was not thrown.")
	elif not shouldBeThrown and alertThrown:
		print('ERROR', alertName, "was thrown.")

def BPTest():
	print("\n####    Systolic BP Test    ####")
	#Test Case   - Hypotensive alert:
	check_alert_thrown('hypo-alert', False)

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	#Enter bp value of 10
	set_value_element_id('bp', '10')

	#Enter age of 2
	set_value_element_id('age', '2')

	#Ensure ‘hypo-alert’  is present
	goto_summary()
	check_alert_thrown('hypo-alert', True)

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	#Enter bp value of 55
	#Keep age of 2
	set_value_element_id('bp', '55')

	#Ensure ‘hypo-alert’ is gone
	goto_summary()
	check_alert_thrown('hypo-alert', False)


def perfusionTests():
	perfusionTest1()
	perfusionTest2()
	perfusionTest3()
	perfusionTest4()

def perfusionTest1():
	print("\n####   PERFUSION TEST #1 - No Alerts Present   #####")
	# Perfusion Alerts Test Case 1 - No Alerts Present:
	check_alert_thrown('poor-perfusion-alert', False)

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	# Enter Lip Color pink
	click_element_id('lipc-pi')

	# Enter Nail bed color pink
	click_element_id('nailc-pi')

	# Enter Cap refill <2
	click_element_id('caprt-2')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)

	# Enter Cap refill 2-4
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('caprt-24')

	# Enter lip color unable to assess
	click_element_id('lipc-unk')

	# Enter nail bed color unable to assess
	click_element_id('nailc-unk')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)
	print("")

def perfusionTest2():
	print("\n####   PERFUSION TEST #2  - Cap Refill Alerts  #####")
	# Perfusion Alerts Test Case 2 - Cap Refill Alerts:

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	# Enter Lip Color pink
	click_element_id('lipc-pi')

	# Enter Nail bed color pink
	click_element_id('nailc-pi')

	# Enter Cap refill >4, throwing alert
	click_element_id('caprt-4')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Cap refill 2-4, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('caprt-24')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)

	# Enter Cap refill >4, throwing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('caprt-4')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Cap refill <2, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('caprt-2')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)
	print("")


def perfusionTest3():
	print("\n#####   PERFUSION TEST #3 - Nail Bed Alerts   #####")
	# Perfusion Alerts Test Case 3 - Nail Bed Alerts:

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	# Enter Lip Color pink
	click_element_id('lipc-pi')

	# Enter Nail bed color white
	click_element_id('nailc-wh')

	# Enter Cap refill <2
	click_element_id('caprt-2')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Nail color pink, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('nailc-pi')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)

	# Enter nail color white, throwing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('nailc-wh')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Nail color unable to assess, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('nailc-unk')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)
	print("")

def perfusionTest4():
	print("\n#####   PERFUSION TEST #4 - Lip Color Alerts   #####")
	# Perfusion Alerts Test Case 3 - Nail Bed Alerts:

	#Go back to Decision App
	goto_decision_app()

	#Open circulation header
	click_element_id('headingThree')

	# Enter Lip Color white
	click_element_id('lipc-wh')

	# Enter Nail bed color pink
	click_element_id('nailc-pi')

	# Enter Cap refill <2
	click_element_id('caprt-2')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Lip color pink, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('lipc-pi')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)

	# Enter lip color white, throwing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('lipc-wh')

	# Ensure ‘poor-perfusion-alert’ is present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', True)

	# Enter Lip color unable to assess, dismissing alert
	goto_decision_app()
	click_element_id('headingThree')
	click_element_id('lipc-unk')

	# Ensure ‘poor-perfusion-alert’ is not present
	goto_summary()
	check_alert_thrown('poor-perfusion-alert', False)
	print("")

#Begin the driver instance with chromedriver application
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument('log-level=2')
driver = webdriver.Chrome('decision/static/chromedriver', options=chrome_options)

#Get the website you are looking for
driver.get('http://127.0.0.1:8080/')
time.sleep(1)

#Click Start Button
click_button_name('start-btn')

#Go to Summary Page
element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

#Check if Type and Cross Alert is thrown
check_alert_thrown('type-and-cross-alert', False)

#Check if right breathing thrown
check_alert_thrown('right-breathing-alert', False)

#Check if left breathing thrown
check_alert_thrown('left-breathing-alert', False)

#Go back to Decision App
goto_decision_app()

#Open header
click_element_id('headingThree')

#Click No on Type and Cross, triggering alert
click_element_id('typeAndCrossNo')

#Go back to Decision App
goto_decision_app()

#Open header
click_element_id('headingTwo')

#Click No on right chest, triggering alert
click_element_id('rchestno')

#Click No on left chest, triggering alert
click_element_id('lchestno')

#Go back to Summary Page
goto_summary()

#Check if Alert is correctly thrown
check_alert_thrown('type-and-cross-alert', True)

# Right Breathing alert should be thrown
check_alert_thrown('right-breathing-alert', True)

# Left Breathing alert should be thrown
check_alert_thrown('left-breathing-alert', True)


#Go back to Decision App
goto_decision_app()

#Open header
click_element_id('headingTwo')

#Click Yes on right chest, dismissing alert
click_element_id('rchestyes')

#Click Yes on left chest, dismissing alert
click_element_id('lchestyes')

#Go back to Summary Page
goto_summary()

#Check if right breathing dismissed
check_alert_thrown('right-breathing-alert', False)

#Check if left breathing dismissed
check_alert_thrown('left-breathing-alert', False)

perfusionTests()

BPTest()

#Close Selenium
driver.quit()
