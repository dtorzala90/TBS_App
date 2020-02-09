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

try:
	element = driver.find_element_by_id('no-iv-alert')
	print('ERROR IV Alert Found.')
except:
	print('CORRECT IV Alert Not Found.')

try:
	element = driver.find_element_by_id('no-etco2-alert')
	print('ERROR ETCO2 alert found.')
except:
	print('CORRECT ETCO2 Alert Not Found.')

try:
	element = driver.find_element_by_id('GCS-intubation-alert')
	print('ERROR Intubation-GCS Alert Found.')
except:
	print('CORRECT Intubation-GCS Alert Not Found.')

#Go back to Decision App
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)

#Open header
element = driver.find_element_by_id('headingThree')
element.click()
time.sleep(125)

#Go back to Summary Page
element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

#Check if Alerts are correctly thrown
try:
	element = driver.find_element_by_id('no-etco2-alert')
	print('CORRECT No ETCO2 alert found.')
except:
	print('ERROR No ETCO2 alert not found.')

time.sleep(185)

try:
	element = driver.find_element_by_id('no-iv-alert')
	print('CORRECT No IV alert found.')
except:
	print('ERROR No IV alert not found.')

#Check IV Alert dismissal
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)


element = driver.find_element_by_id('headingThree')
element.click()
time.sleep(1)

element = driver.find_element_by_id('cenlYes')
element.click()
time.sleep(1)

element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

try:
	element = driver.find_element_by_id('no-iv-alert')
	print('ERROR No IV not found.')
except:
	print('CORRECT No IV alert not found.')

#Check ETT alerts
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)


element = driver.find_element_by_id('headingOne')
element.click()
time.sleep(1)

element = driver.find_element_by_id('ETT')
element.click()
time.sleep(1)

element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

try:
	element = driver.find_element_by_id('ETT-etco2-alert')
	print('CORRECT ETT ETCO2 alert found.')
except:
	print('ERROR No ETT ETCO2 alert found.')

try:
    element = driver.find_element_by_id('GCS-intubation-alert')
    print('CORRECT ETT GCS alert found.')
except:
    print('ERROR No ETT GCS alert found.')

#Check ETCO2 dismissal
element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)


element = driver.find_element_by_id('headingTwo')
element.click()
time.sleep(1)

element = driver.find_element_by_id('etco2_less25')
element.click()
time.sleep(1)

element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

try:
	element = driver.find_element_by_id('no-etco2-alert')
	print('ERROR No ETCO2 alert found.')
except:
	print('CORRECT No ETCO2 alert not found.')

try:
	element = driver.find_element_by_id('ETT-etco2-alert')
	print('ERROR ETT ETCO2 alert found.')
except:
	print('CORRECT ETT ETCO2 alert not found.')

element = driver.find_element_by_tag_name('h4')
element.click()
time.sleep(1)


element = driver.find_element_by_id('headingFour')
element.click()
time.sleep(1)

element = driver.find_element_by_id('motor6')
element.click()
time.sleep(1)

element = driver.find_element_by_id('verbal1')
element.click()
time.sleep(1)

element = driver.find_element_by_id('eye1')
element.click()
time.sleep(1)

element = driver.find_element_by_xpath('//*[@id="navbarToggle"]/div[1]/a[2]')
element.click()
time.sleep(1)

try:
    element = driver.find_element_by_id('GCS-intubation-alert')
    print('ERROR ETT GCS alert found.')
except:
    print('CORRECT No ETT GCS alert not found.')

#Check if Type and Cross Alert is thrown
try:
	element = driver.find_element_by_id('type-and-cross-alert')
	print('ERROR Type and cross found.')
except:
	print('CORRECT Type and Cross not found.')

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


#Close Selenium
driver.quit()