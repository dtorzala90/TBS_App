from django.test import TestCase
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pathlib


#Begin the driver instance with chromedriver application
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument('log-level=2')
driver = webdriver.Chrome('decision/static/chromedriver', options=chrome_options)

#Get the website you are looking for
driver.get('http://127.0.0.1:8080/')
time.sleep(1)

#Click Start Button
element = driver.find_element_by_name('start-btn')
element.click()
time.sleep(1)

#Go to Summary Page
element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

#Check if Type and Cross Alert is thrown
try:
	element = driver.find_element_by_id('type-and-cross-alert')
	print('ERROR Type and cross found.')
except:
	print('CORRECT Type and Cross not found.')

#Check if right breathing thrown
try:
	element = driver.find_element_by_id('right-breathing-alert')
	print('ERROR rightAlert breathing found.')
except:
	print('CORRECT rightAlert breathing not found.')

#Go back to Decision App
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)

#Open header
element = driver.find_element_by_id('headingThree')
element.click()
time.sleep(1)

#Click No on Type and Cross, triggering alert
element = driver.find_element_by_id('typeAndCrossNo')
element.click()
time.sleep(1)

#Go back to Decision App
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)

#Open header
element = driver.find_element_by_id('headingTwo')
element.click()
time.sleep(1)

#Click No on Type and Cross, triggering alert
element = driver.find_element_by_id('rchestno')
element.click()
time.sleep(1)


#Go back to Summary Page
element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

#Check if Alert is correctly thrown
try:
	element = driver.find_element_by_id('type-and-cross-alert')
	print('CORRECT Type and cross found.')
except:
	print('ERROR Type and Cross not found.')

try:
	element = driver.find_element_by_id('right-breathing-alert')
	print('CORRECT rightAlert breathing found.')
except:
	print('ERROR rightAlert breathing not found.')


#Close Selenium
driver.quit()
