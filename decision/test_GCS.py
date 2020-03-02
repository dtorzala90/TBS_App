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

def test_gcs():
	print("\n####    GCS Test    ####")


#Test Case 1:
#Enter Motor value of 1
#Enter Verbal value of 1
#Enter eye value of 1
#Enter Etco2 value 40-50
#Ensure ‘etco2-value-alert’ is present
#Ensure local storage variable ‘Current ETCO2 alert thrown’ is equal to ‘40-50’
#Enter Motor Value 6
#Enter verbal value 5
#Enter eye value 2
#Ensure ‘etco2-value-alert’ not present
#Enter Eye value 4
#Ensure ‘etco2-value-alert’ not present



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

test_gcs()

#Close Selenium
driver.quit()
