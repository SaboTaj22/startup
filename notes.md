# Console Commands
- ssh -i (copy and paste pem file path here) ubuntu@44.214.57.195
- scp -i (copy and paste pem file path here) (copy and past file you'd like to upload to website here) ubuntu@44.214.57.195:public_html/(Name of file you'd like to add html to)

# Launching in Production Environment
- Within the VSC terminal cd to the correct file
- ./deployFiles.sh -k (copy and paste pem file path here) -h yourdomain.click -s startup
- Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
  
# Notes
- An IP address can be given a domain to be referenced to.
- To get rid of the "Not Secure" sign next to the url search, you need to have a web certificate.
- html	The page container
- Learned how to deploy startup
# Common HTML Elements
- head	Header information
- title	Title of the page
- meta	Metadata for the page such as character set or viewport settings
- script	JavaScript reference. Either a external reference, or inline
- include	External content reference
- body	The entire content body of the page
- header	Header of the main content
- footer	Footer of the main content
- nav	Navigational inputs
- main	Main content of the page
- section	A section of the main content
- aside	Aside content from the main content
- div	A block division of content
- span	An inline span of content
- h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
- p	A paragraph of text
- b	Bring attention
- table	Table
- tr	Table row
- th	Table header
- td	Table data
- ol,ul	Ordered or unordered list
- li	List item
- a	Anchor the text to a hyperlink
- img	Graphical image reference
- dialog	Interactive component such as a confirmation
- form	A collection of user input
- input	User input field
- audio	Audio content
- video	Video content
- svg	Scalable vector graphic content
- iframe	Inline frame of another HTML page

# JS Notes
- Log: The basic usage of the console object is to output a log message.

console.log('hello');
// OUTPUT: hello
You can create formatted messages in the log parameter.

console.log('hello %s', 'world');
// OUTPUT: hello world
You can even specify CSS declarations in order to style the log output.

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text

- Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms

- Count
To see how many times a block of code is called you can use the count function.

console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1

# Elastic IP Address Info
- Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server. Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.
