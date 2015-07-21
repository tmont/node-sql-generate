echo "Downloding SQL Express 2014"	
(new-object System.Net.WebClient).DownloadFile( "http://download.microsoft.com/download/E/A/E/EAE6F7FC-767A-4038-A954-49B8B05D04EB/Express%2064BIT/SQLEXPR_x64_ENU.exe", "c:\tmp\SQLEXPR_x64_ENU.exe")
