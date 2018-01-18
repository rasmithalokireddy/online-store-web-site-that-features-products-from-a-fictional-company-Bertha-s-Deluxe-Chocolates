#!/usr/bin/perl 
#	Sample perl cgi script.  This script prints a list of the 
#	products in the opatija proj4.products table.
#       For use with AJAX
#	
#
   
use DBI;


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn032";
my $username = "jadrn032";
my $password = "pipe";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT t.sku,p.title,t.qty, t.date, (t.qty * p.cost) , (p.retail - p.cost)*t.qty FROM transaction t, proj4.products p where t.sku = p.sku ;");
$sth->execute();



$str = "";
while(my @row=$sth->fetchrow_array()) {
    foreach $item (@row) { 
        $str .= $item."-";
        }       
    $str .= ";";    
    }

  

 
print "Content-type:  text/html\n\n";
$sth->finish();
$dbh->disconnect();

    	
my @values = split(';', $str);
foreach $strsplit (@values){

	print "$strsplit\n";
my @detail = split('-', $strsplit);
foreach $detsplit (@detail){
	
}
print "$detsplit\n";
}


