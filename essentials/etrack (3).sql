-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 10, 2018 at 02:36 PM
-- Server version: 5.5.60-0+deb8u1
-- PHP Version: 5.6.37-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `etrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `alarms`
--

CREATE TABLE IF NOT EXISTS `alarms` (
  `alarmname` varchar(30) NOT NULL,
  `tag1` varchar(100) NOT NULL,
  `condition` varchar(20) NOT NULL,
  `setpoint` int(50) NOT NULL,
  `settime` int(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `trueMsg` varchar(50) NOT NULL,
  `falseMsg` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alarms`
--

INSERT INTO `alarms` (`alarmname`, `tag1`, `condition`, `setpoint`, `settime`, `status`, `trueMsg`, `falseMsg`) VALUES
('singh', 'Siemens1200_tag1', '>', 210, 3, 'false', 's@gmail.com', 'hii'),
('Meter Conf', 'Voltage Main Phase', '!=', 500, 1, 'false', 'True', 'False'),
('Testing', 'MeterConf_Meter1', '==', 200, 1, 'false', 'Voltage Load ', 'b bbnn'),
('fb', 'MeterConf_Meter1', '==', 345, 1, 'false', 'thy', 'vcnbgv'),
('Machine Voltage Alert', 'Machine1', '==', 233, 1, 'false', 'hgnh', 'No falt');

-- --------------------------------------------------------

--
-- Table structure for table `comlogo`
--

CREATE TABLE IF NOT EXISTS `comlogo` (
`ip` int(5) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comlogo`
--

INSERT INTO `comlogo` (`ip`, `name`) VALUES
(1, 'CAIMAN SOLUTIONS PVT LTD');

-- --------------------------------------------------------

--
-- Table structure for table `dashboards`
--

CREATE TABLE IF NOT EXISTS `dashboards` (
`sno` bigint(20) unsigned NOT NULL,
  `dashboard` varchar(30) NOT NULL,
  `html` mediumtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dashboards`
--

INSERT INTO `dashboards` (`sno`, `dashboard`, `html`) VALUES
(11, 'test by faraz', '[{"html":""},{"w_id":"1","width":"3","height":"6","x":"0","y":"0","tagname":"Compressor_C2","type":"gage","textRenderer":"gage","conf":{"id":"divid(1)","value":"abc","min":"0","max":"300","decimals":"2","title":"Widget Title","relativeGaugeSize":true,"label":"Parameter","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" v"}},{"w_id":"2","width":"12","height":"6","x":"0","y":"6","id":"divid2","export1":"true","type":"lineChart","color":"#337ab7","graphs":[{"balloonText":"[[column]] [[catagory]]=[[value]]","fillAlphas":"1","bullet":"none","bulletSize":"1","connect":"true","lineColor":"#000000","title":"ghfg","lineThickness":"2","type":"column","valueField":"Compressor_C2","id":"AmGraph-63"}],"title1":"Parameter","text":"Web Socket Chart","dataProvider":[{"catagory":"2018-03-01 10:00:00","Compressor_C2":"49.07"},{"catagory":"2018-03-02 10:00:00","Compressor_C2":"50.00"},{"catagory":"2018-03-03 10:00:00","Compressor_C2":"243.01"},{"catagory":"2018-03-04 10:00:00","Compressor_C2":"0"},{"catagory":"2018-03-05 10:00:00","Compressor_C2":"273.06"},{"catagory":"2018-03-06 10:00:00","Compressor_C2":"49.09"},{"catagory":"2018-03-07 10:00:00","Compressor_C2":"242.09"},{"catagory":"2018-03-08 10:00:00","Compressor_C2":"243.00"},{"catagory":"2018-03-09 10:00:00","Compressor_C2":"50.00"}],"tagname":["Compressor_C2"],"title2":"Date","title3":"Web Socket Chart"},{"w_id":"3","width":"9","height":"6","x":"3","y":"0","id":"divid3","export1":"true","type":"lineChart","color":"#337ab7","graphs":[{"balloonText":"[[column]] [[catagory]]=[[value]]","fillAlphas":"1","bullet":"none","bulletSize":"1","connect":"true","lineColor":"#000000","title":"ghfg","lineThickness":"2","type":"column","valueField":"Compressor_C2","id":"AmGraph-63"}],"title1":"Parameter","text":"Web Socket Chart","dataProvider":[{"catagory":"2018-03-01 10:00:00","Compressor_C2":"49.07"},{"catagory":"2018-03-02 10:00:00","Compressor_C2":"50.00"},{"catagory":"2018-03-03 10:00:00","Compressor_C2":"243.01"},{"catagory":"2018-03-04 10:00:00","Compressor_C2":"0"},{"catagory":"2018-03-05 10:00:00","Compressor_C2":"273.06"},{"catagory":"2018-03-06 10:00:00","Compressor_C2":"49.09"},{"catagory":"2018-03-07 10:00:00","Compressor_C2":"242.09"},{"catagory":"2018-03-08 10:00:00","Compressor_C2":"243.00"},{"catagory":"2018-03-09 10:00:00","Compressor_C2":"50.00"}],"tagname":["Compressor_C2"],"title2":"Date","title3":"Web Socket Chart"}]'),
(13, 'Shivam', '[{"html":""},{"w_id":"1","width":"3","height":"4","x":"3","y":"4","tagname":"Compressor_C1","type":"gage","textRenderer":"gage","conf":{"id":"divid(1)","value":"abc","min":"0","max":"400","decimals":"0","title":"Widget Title","relativeGaugeSize":true,"label":"Volt","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" "}},{"w_id":"2","width":"3","height":"4","x":"0","y":"4","tagname":"Compressor_Load1","type":"gage","textRenderer":"gage","conf":{"id":"divid(2)","value":"abc","min":"0","max":"400","decimals":"0","title":"Widget Title","relativeGaugeSize":true,"label":"Volt","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" "}},{"w_id":"3","width":"3","height":"4","x":"3","y":"0","tagname":"Compressor_C3","type":"historicalValue","tspan":"12H","id":"divid3","value":"none","FontColor":"#000000","FontSize":"20px","FontWeight":"normal","FontFamily":"Times New Roman","symbol":"c3","digit":"2","background":"#f2f2f2","borderColor":"#f2f2f2","borderThickness":"1"},{"w_id":"4","width":"3","height":"4","x":"0","y":"0","tagname":"Compressor_C3","type":"gage","textRenderer":"gage","conf":{"id":"divid(4)","value":"abc","min":"0","max":"300","decimals":"2","title":"Widget Title","relativeGaugeSize":true,"label":"Parameter","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" c3"}}]');

-- --------------------------------------------------------

--
-- Table structure for table `emailcon`
--

CREATE TABLE IF NOT EXISTS `emailcon` (
`id` int(10) NOT NULL,
  `from` varchar(50) NOT NULL,
  `passw` varchar(50) NOT NULL,
  `port` varchar(50) NOT NULL,
  `server` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emailcon`
--

INSERT INTO `emailcon` (`id`, `from`, `passw`, `port`, `server`) VALUES
(1, 'fdm1.0.sr0001@gmail.com', '7309196555', '465', 'smtp.gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE IF NOT EXISTS `Employee` (
`SNo` int(50) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Department` varchar(200) NOT NULL,
  `UserType` varchar(100) NOT NULL,
  `UserID` varchar(100) NOT NULL,
  `Passwords` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`SNo`, `Name`, `Department`, `UserType`, `UserID`, `Passwords`) VALUES
(2, 'Kuchdg', 'sdxwd', 'Analyzer', 'wsws', 'qss'),
(3, 'Viewer', 'Operator', 'Analyzer', 'view@lab', '123'),
(4, 'Mr RR', 'Operator', 'Analyzer', 'rr', '123');

-- --------------------------------------------------------

--
-- Table structure for table `EmpScreen`
--

CREATE TABLE IF NOT EXISTS `EmpScreen` (
`Sno` int(50) NOT NULL,
  `EmpName` varchar(200) NOT NULL,
  `ScreenName` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `EmpScreen`
--

INSERT INTO `EmpScreen` (`Sno`, `EmpName`, `ScreenName`) VALUES
(1, 'view@lab', 'Machine'),
(2, 'view@lab', 'Home Dashboard'),
(3, 'view@lab', 'ABC Department'),
(4, 'view@lab', 'Production');

-- --------------------------------------------------------

--
-- Table structure for table `eventEmail`
--

CREATE TABLE IF NOT EXISTS `eventEmail` (
`Sno` int(50) NOT NULL,
  `To` varchar(200) NOT NULL,
  `CC` varchar(200) NOT NULL,
  `Subject` varchar(200) NOT NULL,
  `Message` varchar(200) NOT NULL,
  `AlarmName` varchar(200) NOT NULL,
  `Condition` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventEmail`
--

INSERT INTO `eventEmail` (`Sno`, `To`, `CC`, `Subject`, `Message`, `AlarmName`, `Condition`) VALUES
(5, 'yadavpuja754@gmail.com', 'saurabhsingh99017@gmail.com', 'Testing', 'Testing Condition', 'Meter Alert', 'true'),
(6, 'yadavpuja754@gmail.com', 'programmeryadav@gmail.com', 'Voltage Load Information', 'Hi ,  Your Voltage is high .So you check currently for a good security.Than You!!!!', 'Meter Alert', 'false'),
(8, 'yadavpuja754@gmail.com', 'yadavpuja754@gmail.com', 'Machine Voltage Info', 'Machine Voltage Info', 'Machine Voltage Alert', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `getipsytem`
--

CREATE TABLE IF NOT EXISTS `getipsytem` (
`id` int(11) NOT NULL,
  `getids` varchar(100) NOT NULL,
  `devicename` varchar(50) NOT NULL,
  `tag` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Machine`
--

CREATE TABLE IF NOT EXISTS `Machine` (
`SNo` int(50) NOT NULL,
  `MachineName` varchar(200) NOT NULL,
  `Racipe` varchar(200) NOT NULL,
  `VertualTag` text NOT NULL,
  `User` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Machine`
--

INSERT INTO `Machine` (`SNo`, `MachineName`, `Racipe`, `VertualTag`, `User`) VALUES
(6, 'First Machine', ',First Racipe', 'First_Machine_AR,First_Machine_PR,First_Machine_QR,First_Machine_OEE', 'dd'),
(7, 'Sec Machine', ',Sec Racipe,New Recipe', 'Sec_Machine_AR,Sec_Machine_PR,Sec_Machine_QR,Sec_Machine_OEE', 'dd'),
(8, 'Third Machine', ',Third Racipe,Forth Recipe,New1,6Aug', 'Third_Machine_AR,Third_Machine_PR,Third_Machine_QR,Third_Machine_OEE', 'dd'),
(9, 'Manager Machine', ',New Recipe OEE,New Recipe OEE,Testing OEE One', 'greate_new_AR,greate_new_PR,greate_new_QR,greate_new_OEE', 'Manager'),
(11, 'OEE Machine', ',Testing Recipe,Testing OEE One', 'OEE_Machine_AR,OEE_Machine_PR,OEE_Machine_QR,OEE_Machine_OEE', 'Manager'),
(13, 'Newdd', ',New Recipe OEE', 'Newdd_AR,Newdd_PR,Newdd_QR,Newdd_OEE', 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `MemoryTag`
--

CREATE TABLE IF NOT EXISTS `MemoryTag` (
`Sno` int(50) NOT NULL,
  `MemoryTag` varchar(200) NOT NULL,
  `Formula` text NOT NULL,
  `TagJson` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MemoryTag`
--

INSERT INTO `MemoryTag` (`Sno`, `MemoryTag`, `Formula`, `TagJson`) VALUES
(15, 'Avg Load', '3 * Siemens120000_tag1 +Siemens120000_ abc_gh +Coil Machine_nm', '[{"tagname":"Siemens120000_ abc_gh","formula":"+"},{"tagname":"Siemens120000_tag1","formula":"+","constant":"3","cntformula":"*"},{"tagname":"Coil Machine_nm","formula":"+"}]');

-- --------------------------------------------------------

--
-- Table structure for table `mqttclient`
--

CREATE TABLE IF NOT EXISTS `mqttclient` (
`id` int(11) NOT NULL,
  `mqttip` varchar(50) NOT NULL,
  `mqttport` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `upass` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mqttclient`
--

INSERT INTO `mqttclient` (`id`, `mqttip`, `mqttport`, `username`, `upass`) VALUES
(2, '192.168.0.45', '1883', 'admin1', 'admin1');

-- --------------------------------------------------------

--
-- Table structure for table `mqttcon`
--

CREATE TABLE IF NOT EXISTS `mqttcon` (
`id` int(5) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mqttcon`
--

INSERT INTO `mqttcon` (`id`, `status`) VALUES
(1, 'false');

-- --------------------------------------------------------

--
-- Table structure for table `mqttserver`
--

CREATE TABLE IF NOT EXISTS `mqttserver` (
`id` int(5) NOT NULL,
  `username` varchar(50) NOT NULL,
  `upass` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mqttserver`
--

INSERT INTO `mqttserver` (`id`, `username`, `upass`) VALUES
(4, 'admin1', 'admin1');

-- --------------------------------------------------------

--
-- Table structure for table `multipage`
--

CREATE TABLE IF NOT EXISTS `multipage` (
`id` int(11) NOT NULL,
  `dashboard` varchar(100) NOT NULL,
  `pageurl` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `multipage`
--

INSERT INTO `multipage` (`id`, `dashboard`, `pageurl`) VALUES
(1, 'Report Email Manager', '/sendEmail'),
(2, 'FTP Configuration', '/sendFTP'),
(3, 'Production Consumption History', ''),
(4, 'Performance History', ''),
(6, 'Event/Alarm Email Manager', ''),
(7, 'Alarm Configuration', '');

-- --------------------------------------------------------

--
-- Table structure for table `polls`
--

CREATE TABLE IF NOT EXISTS `polls` (
`poll_id` bigint(20) unsigned NOT NULL,
  `communication` varchar(100) NOT NULL,
  `device_name` varchar(100) NOT NULL,
  `comport` varchar(100) NOT NULL,
  `device_id` int(255) NOT NULL,
  `fc` varchar(100) NOT NULL,
  `start_address` varchar(100) NOT NULL,
  `qty` int(255) NOT NULL,
  `tag` varchar(10000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `polls`
--

INSERT INTO `polls` (`poll_id`, `communication`, `device_name`, `comport`, `device_id`, `fc`, `start_address`, `qty`, `tag`) VALUES
(34, 'Modbus RTU', 'Compressor', 'Serial Port1', 2, 'Holding Register', '2500', 64, '[{"tagname":"Compressor_V1","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"2","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_V2","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_V3","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"6","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_V12","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"8","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_V23","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"10","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_V31","tagdesc":"Volt","datatype":"FloatSwap (A B C D)","offset":"12","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_C1","tagdesc":"Amp","datatype":"FloatSwap (A B C D)","offset":"14","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_C2","tagdesc":"Amp","datatype":"FloatSwap (A B C D)","offset":"16","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_C3","tagdesc":"Amp","datatype":"FloatSwap (A B C D)","offset":"18","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_CN","tagdesc":"Amp","datatype":"FloatSwap (A B C D)","offset":"20","multiply":"1","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_Load1","tagdesc":"Kw","datatype":"FloatSwap (A B C D)","offset":"22","multiply":".001","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_Load2","tagdesc":"Kw","datatype":"FloatSwap (A B C D)","offset":"24","multiply":".001","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_Load3","tagdesc":"Kw","datatype":"FloatSwap (A B C D)","offset":"26","multiply":"0.001","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_Total Load","tagdesc":"Kw","datatype":"FloatSwap (A B C D)","offset":"28","multiply":"0.001","tagnature":"Instant","poll_id":"34"},{"tagname":"Compressor_PF","tagdesc":"PF","datatype":"FloatSwap (A B C D)","offset":"60","multiply":"1","tagnature":"Instant","poll_id":"34"}]'),
(35, 'Modbus RTU', 'Compressor', 'Serial Port1', 2, 'Holding Register', '0', 14, '[{"tagname":"Compressor_Run hour","tagdesc":"Min","datatype":"DInt (A B C D)","offset":"0","multiply":"0.016667","tagnature":"Cumulative","poll_id":"35"},{"tagname":"Compressor_Kwh","tagdesc":"Kwh","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Cumulative","poll_id":"35"}]'),
(54, 'Modbus RTU', 'Chiller', 'Serial Port1', 2, 'Holding Register', '0', 14, '[{"tagname":"Chiller_Run hour","tagdesc":"Min","datatype":"DInt (A B C D)","offset":"0","multiply":"0.016667","tagnature":"Cumulative","poll_id":"54"},{"tagname":"Chiller_Kwh","tagdesc":"Kwh","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Cumulative","poll_id":"54"}]'),
(55, 'Modbus RTU', 'try1', 'Serial Port1', 2, 'Holding Register', '0', 14, '[{"tagname":"try1_Run hour","tagdesc":"Min","datatype":"DInt (A B C D)","offset":"0","multiply":"0.016667","tagnature":"Cumulative","poll_id":"55"},{"tagname":"try1_Kwh","tagdesc":"Kwh","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Cumulative","poll_id":"55"}]'),
(56, 'Modbus RTU', 'simple', 'Serial Port1', 2, 'Holding Register', '0', 14, '[{"tagname":"simple_Run hour","tagdesc":"Min","datatype":"DInt (A B C D)","offset":"0","multiply":"0.016667","tagnature":"Cumulative","poll_id":"56"},{"tagname":"simple_Kwh","tagdesc":"Kwh","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Cumulative","poll_id":"56"}]'),
(57, 'Modbus RTU', 'currect', 'Serial Port1', 2, 'Holding Register', '0', 14, '[{"tagname":"currect_Run hour","tagdesc":"Min","datatype":"DInt (A B C D)","offset":"0","multiply":"0.016667","tagnature":"Cumulative","poll_id":"57"},{"tagname":"currect_Kwh","tagdesc":"Kwh","datatype":"FloatSwap (A B C D)","offset":"4","multiply":"1","tagnature":"Cumulative","poll_id":"57"}]');

-- --------------------------------------------------------

--
-- Table structure for table `Racipes`
--

CREATE TABLE IF NOT EXISTS `Racipes` (
`SNo` int(50) NOT NULL,
  `RacipeName` varchar(200) NOT NULL,
  `PCountStroke` int(50) NOT NULL,
  `IdealRunRate` double NOT NULL,
  `TotalAvailableTime` int(11) NOT NULL,
  `ScheduledDowntime` int(11) NOT NULL,
  `Tagname` varchar(200) NOT NULL,
  `Tagname1` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Racipes`
--

INSERT INTO `Racipes` (`SNo`, `RacipeName`, `PCountStroke`, `IdealRunRate`, `TotalAvailableTime`, `ScheduledDowntime`, `Tagname`, `Tagname1`) VALUES
(15, 'First Racipe', 4, 3.3, 240, 30, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(16, 'Sec Racipe', 4, 3, 200, 20, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(17, 'Third Racipe', 3, 3, 240, 20, 'undefined', 'PLC Twix_RunTime'),
(18, 'Forth Recipe ', 4, 3.5, 300, 20, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(19, 'New Recipe', 3, 4.2, 300, 20, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(21, 'New1', 3, 9, 240, 20, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(22, '6Aug', 2, 6, 480, 30, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(25, 'Testing Recipe ', 2, 6, 120, 0, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(27, 'Testing OEE One', 2, 6, 300, 20, 'PLC Twix_Production', 'PLC Twix_RunTime'),
(28, 'New Recipe OEE', 2, 6, 120, 0, 'PLC Twix_Production', 'PLC Twix_RunTime');

-- --------------------------------------------------------

--
-- Table structure for table `screens`
--

CREATE TABLE IF NOT EXISTS `screens` (
  `DashNo` int(50) DEFAULT NULL,
`sno` int(50) NOT NULL,
  `username` text NOT NULL,
  `dashboard` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `screens`
--

INSERT INTO `screens` (`DashNo`, `sno`, `username`, `dashboard`) VALUES
(5, 86, 'jagran', 'Production Consumption History'),
(7, 87, 'jagran', 'Performance History'),
(8, 88, 'jagran', 'Report Email Manager'),
(10, 91, 'jagran', 'test by faraz'),
(6, 92, 'jagran', 'fghjkl'),
(NULL, 93, 'jagran', 'Shivam');

-- --------------------------------------------------------

--
-- Table structure for table `sendemail`
--

CREATE TABLE IF NOT EXISTS `sendemail` (
`mailId` int(11) NOT NULL,
  `to` varchar(50) NOT NULL,
  `cc` varchar(200) NOT NULL,
  `subject` varchar(120) NOT NULL,
  `message` varchar(500) NOT NULL,
  `Reporttype` varchar(50) NOT NULL,
  `parameter` varchar(300) NOT NULL,
  `datefrom` time NOT NULL,
  `dateTo` time NOT NULL,
  `intervalMin` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sendemail`
--

INSERT INTO `sendemail` (`mailId`, `to`, `cc`, `subject`, `message`, `Reporttype`, `parameter`, `datefrom`, `dateTo`, `intervalMin`) VALUES
(1, 'megatronicslab@live.com', '', 'Daily Report Dainik jagran', 'This is system generated report', 'Cumulative', '["Compressor  _Run hour","Compressor  _Kwh","calculated_comp_loadhr","calculated_chiler_loadhr","Chiler_Run hour","Chiler_Kwh"]', '09:00:00', '09:00:00', 60);

-- --------------------------------------------------------

--
-- Table structure for table `sendFTP`
--

CREATE TABLE IF NOT EXISTS `sendFTP` (
`ftpid` int(11) NOT NULL,
  `hostname` varchar(50) NOT NULL,
  `port` int(10) NOT NULL,
  `userid` varchar(100) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `reporttype` varchar(100) NOT NULL,
  `parameter` varchar(500) NOT NULL,
  `intervalinmin` int(10) NOT NULL,
  `filename` varchar(100) NOT NULL,
  `GenerateReport` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sendFTP`
--

INSERT INTO `sendFTP` (`ftpid`, `hostname`, `port`, `userid`, `pass`, `reporttype`, `parameter`, `intervalinmin`, `filename`, `GenerateReport`) VALUES
(10, '192.168.0.25', 21, '0', '73kjdfiknh', 'Instant', '["Siemens1200_tag1"]', 1, '', 10);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
`serial` bigint(20) unsigned NOT NULL,
  `setting` varchar(100) NOT NULL,
  `json` varchar(2000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`serial`, `setting`, `json`) VALUES
(1, 'comport_settings', '{\n    "connectorType": "SERIAL",\n    "serialPort": "/div/ttyAMA0",\n    "serialBaudrate": "19200",\n    "serialDatabits": "8",\n    "serialParity": "even",\n    "serialStopbits": "1",\n    "serialConnectionDelay": "2000",\n    "clientTimeout": "1000",\n    "reconnectTimeout": "1500"\n}');

-- --------------------------------------------------------

--
-- Table structure for table `shiftData`
--

CREATE TABLE IF NOT EXISTS `shiftData` (
`Sno` int(50) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Machine` varchar(100) NOT NULL,
  `Racipe` varchar(100) NOT NULL,
  `PCS` int(50) NOT NULL,
  `ScrapType` int(50) NOT NULL,
  `TotalStroke` int(50) NOT NULL,
  `QCount` int(50) NOT NULL,
  `TotalProduction` int(100) NOT NULL,
  `TAT` int(100) NOT NULL,
  `SD` int(50) NOT NULL,
  `UD` int(50) NOT NULL,
  `OT` int(100) NOT NULL,
  `IRR` int(100) NOT NULL,
  `Tagname` varchar(200) NOT NULL,
  `Tagname1` varchar(200) NOT NULL,
  `AR` int(100) NOT NULL,
  `PR` int(100) NOT NULL,
  `QR` int(100) NOT NULL,
  `OEE` int(100) NOT NULL,
  `StartDate` varchar(200) NOT NULL,
  `StopDate` varchar(200) NOT NULL,
  `Status` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shiftData`
--

INSERT INTO `shiftData` (`Sno`, `UserName`, `Machine`, `Racipe`, `PCS`, `ScrapType`, `TotalStroke`, `QCount`, `TotalProduction`, `TAT`, `SD`, `UD`, `OT`, `IRR`, `Tagname`, `Tagname1`, `AR`, `PR`, `QR`, `OEE`, `StartDate`, `StopDate`, `Status`) VALUES
(4, 'view@lab', 'Machine PLC Show', 'Device Name', 3, 6, 79, 231, 237, 320, 30, -7610, 79, 3, 'Kwh Main Phase', 'Kwh Main Phase', 0, 3, 1, 0, '2018-06-22 10:00', '2018-06-22 14:00', 'Stoped'),
(5, 'view@lab', 'Machine PLC Show', 'Device Name', 3, 0, 0, 0, 0, 320, 30, 0, 0, 3, 'Kwh Main Phase', 'Kwh Main Phase', 0, 0, 0, 0, '2018-06-22 10:00', '0', 'Started');

-- --------------------------------------------------------

--
-- Table structure for table `showftp`
--

CREATE TABLE IF NOT EXISTS `showftp` (
`showid` int(11) NOT NULL,
  `datetime` varchar(100) NOT NULL,
  `events` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblVersion`
--

CREATE TABLE IF NOT EXISTS `tblVersion` (
`Sno` int(11) NOT NULL,
  `VersionName` varchar(200) NOT NULL,
  `Version` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblVersion`
--

INSERT INTO `tblVersion` (`Sno`, `VersionName`, `Version`) VALUES
(1, 'Real Time Display', 'v1'),
(2, 'Charts', 'v2'),
(3, 'Historical Display', 'v3');

-- --------------------------------------------------------

--
-- Table structure for table `tcpsettings`
--

CREATE TABLE IF NOT EXISTS `tcpsettings` (
`id` int(10) NOT NULL,
  `tcpidc` varchar(20) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `port` varchar(50) NOT NULL,
  `action` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tcpsettings`
--

INSERT INTO `tcpsettings` (`id`, `tcpidc`, `ip`, `port`, `action`) VALUES
(1, 'TCP1', '192.168.0.108', '1880', 'false'),
(2, 'TCP2', '192.168.0.121', '1880', 'false'),
(3, 'TCP3', '192.168.0.126', '1880', 'true'),
(4, 'TCP4', '192.168.0.120', '1880', 'true'),
(5, 'TCP5', '192.168.0.122', '1880', 'true'),
(6, 'TCP6', '192.168.0.123', '1880', 'true'),
(7, 'TCP7', '192.168.0.124', '1880', 'true'),
(8, 'TCP8', '192.168.0.111', '1880', 'true'),
(9, 'TCP9', '192.168.0.127', '1880', 'true'),
(10, 'TCP10', '192.168.0.19', '10502', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE IF NOT EXISTS `team` (
`id` int(20) NOT NULL,
  `teamviewerid` varchar(50) NOT NULL,
  `passwd` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `teamviewerid`, `passwd`) VALUES
(1, '1072152518', 'ashu@12345');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`ID` bigint(20) unsigned NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `usertype` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `company` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `username`, `password`, `usertype`, `name`, `company`) VALUES
(1, 'admin', 'admin', 'Admin', 'Ashish', 'Megatronics Lab'),
(7, 'saurabh', '8354985415', 'master', 'Saurabh singh', 'Production'),
(16, 'megatocaiman', 'megatocaiman9236', 'SuperAdmin', 'hii', 'gg'),
(17, 'jagran', '12345', 'Analyzer', 'danik jagran', 'Electrical');

-- --------------------------------------------------------

--
-- Table structure for table `VirtualTag1`
--

CREATE TABLE IF NOT EXISTS `VirtualTag1` (
`VtagId` int(11) NOT NULL,
  `VTagsname` varchar(50) NOT NULL,
  `Unitname` varchar(50) NOT NULL,
  `Tag1` varchar(50) NOT NULL,
  `Condition` varchar(10) NOT NULL,
  `Tag2` varchar(50) NOT NULL,
  `multiply` int(50) NOT NULL,
  `Tagnature` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `widget`
--

CREATE TABLE IF NOT EXISTS `widget` (
`sno` int(50) NOT NULL,
  `Version` varchar(200) NOT NULL,
  `widgetname` text,
  `urlname` text,
  `widgetImage` text NOT NULL,
  `wjson` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `widget`
--

INSERT INTO `widget` (`sno`, `Version`, `widgetname`, `urlname`, `widgetImage`, `wjson`) VALUES
(1, 'v1', 'Gage Type 1', '/gage', 'gage1.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage Phase B","type":"gage","textRenderer":"gage","conf":{"id":"newWidget","value":"abc","min":"0","max":"300","title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" "}}]'),
(2, 'v1', 'Gage Type 2', '/circlegage', 'gage2.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"circlegage","textRenderer":"gage","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","donut":true}}]'),
(3, 'v1', 'Gage Type 3', '/simplepointer', 'gage3.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"simplepointer","textRenderer":"gage","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","pointer":true}}]'),
(4, 'v1', 'Gage Type 4', '/simple1pointer', 'gage4.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"simple1pointer","textRenderer":"gage","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","pointer":true,"pointerOptions":{"toplength":"-15","bottomlength":"30","bottomwidth":"12","color":"#8080c0","stroke":"#8080c0","stroke_width":"3"}}}]'),
(5, 'v1', 'Gage Type 5', '/circlepointer', 'gage5.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"circlepointer","textRenderer":"gage","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","donut":true,"pointer":true,"pointerOptions":{"toplength":"-15","bottomlength":"40","bottomwidth":"12","color":"#8080c0","stroke":"#8080c0","stroke_width":"3"}}}]'),
(6, 'v2', 'Web Socket Chart', '/lineChart', 'websocket.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","type":"lineChart","conf":{"id":"newWidget","type":"serial","startDuration":1,"font-size":12,"color":"#337ab7","graphs":[{"balloonText":"[[title]] of [[category]]:[[value]]","bullet":"none","bulletSize":1,"connect":true,"lineColor":"#337ab7","title":"Parameter","lineThickness":2,"valueField":"003 Voltage Phase R","id":"Amchart-1"}],"valueAxes":[{"position":"left","title":"Parameter","title color":"#CC0000"}],"legend":{"enabled":true,"useGraphSettings":true},"titles":[{"text":"Web Socket Chart","size":12}],"dataProvider":[{"catagory":"2018-03-29 16:00:00","003 Voltage Phase R":"49.07"}],"chartCursor":{"categoryBalloonDateFormat":"JJ:NN:SS","cursorAlpha":0.1,"cursorColor":"#000000","fullWidth":true,"fullWidth":true,"graphBulletSize":5},"categoryField":"catagory","categoryAxis":{"minPeriod":"ss","parseDates":true,"minorGridEnabled":true,"position":"bottom","title":"Date","title    color":"#CC0000"},"chartScrollbar":{"scrollbarHeight":2,"offset":-1,"backgroundAlpha":0.1,"backgroundColor":"#888888","selectedBackgroundColor":"#67b7dc","selectedBackgroundAlpha":1},"export":{"enabled":true}}}]'),
(7, 'v2', 'Historical Chart', '/trends', 'historical.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","type":"trends","conf":{"id":"newWidget","type":"serial","startDuration":1,"font-size":12,"color":"#337ab7","graphs":[{"balloonText":"[[title]] of [[category]]:[[value]]","bullet":"none","bulletSize":1,"connect":true,"lineColor":"#337ab7","title":"Parameter","lineThickness":2,"valueField":"Parameter","categoryField":"category"}],"valueAxes":[{"position":"left","title":"Parameter","title color":"#CC0000"}],"legend":{"enabled":true,"useGraphSettings":true},"titles":[{"text":"Historical Chart","size":12}],"dataProvider":[{"category":"2018-03-29 16:00:00","Parameter":"49.07"}],"chartCursor":{"categoryBalloonDateFormat":"JJ:NN:SS","cursorAlpha":0.1,"cursorColor":"#000000","fullWidth":true,"fullWidth":true,"graphBulletSize":5},"categoryField":"category","categoryAxis":{"minPeriod":"ss","parseDates":true,"minorGridEnabled":true,"position":"bottom","title":"Date","title    color":"#CC0000"},"chartScrollbar":{"scrollbarHeight":2,"offset":-1,"backgroundAlpha":0.1,"backgroundColor":"#888888","selectedBackgroundColor":"#67b7dc","selectedBackgroundAlpha":1},"export":{"enabled":true}}}]'),
(8, 'v2', 'Auto Refresh Chart', '/liveChart', 'autoRefresh.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","type":"liveChart","conf":{"id":"newWidget","type":"serial","startDuration":1,"font-size":12,"color":"#337ab7","graphs":[{"balloonText":"[[title]] of [[category]]:[[value]]","bullet":"none","bulletSize":1,"connect":true,"lineColor":"#337ab7","title":"Voltage","lineThickness":2,"valueField":"003 Voltage Phase R","id":"Amchart-1"}],"valueAxes":[{"position":"left","title":"Parameter","title color":"#CC0000"}],"legend":{"enabled":true,"useGraphSettings":true},"titles":[{"text":"Auto Refresh Chart","size":12}],"dataProvider":[{"catagory":"2018-03-29 16:00:00","003 Voltage Phase R":"49.07"}],"chartCursor":{"categoryBalloonDateFormat":"JJ:NN:SS","cursorAlpha":0.1,"cursorColor":"#000000","fullWidth":true,"fullWidth":true,"graphBulletSize":5},"categoryField":"catagory","categoryAxis":{"minPeriod":"ss","parseDates":true,"minorGridEnabled":true,"position":"bottom","title":"Date","title    color":"#CC0000"},"chartScrollbar":{"scrollbarHeight":2,"offset":-1,"backgroundAlpha":0.1,"backgroundColor":"#888888","selectedBackgroundColor":"#67b7dc","selectedBackgroundAlpha":1},"export":{"enabled":true}}}]'),
(12, 'v1', 'NumericValue', '/numericValue', 'numericValue.png', '[{"w_id":"1","x":"1","y":"1","width":"8","height":"1","tagname":"384 Voltage Phase B", "type":"numericValue","id":"newWidget","value":"none","FontColor":"#000000","FontSize":"20","FontWeight":"normal","FontFamily":"Times New Roman","symbol":"","digit":"2","background":"#f2f2f2","borderColor":"#f2f2f2","borderThickness":"1"}]'),
(13, 'v1', 'TextValue', '/textValue', 'textValue.png', '[{"w_id":"1","x":"1","y":"1","width":"8","height":"1","text":"Title Of Widget", "type":"textValue","id":"newWidget","FontColor":"#000000","FontSize":"18","FontWeight":"normal","FontFamily":"Times New Roman","background":"#f2f2f2","borderColor":"#f2f2f2","borderThickness":"1"}]'),
(15, 'v3', 'HistoricalGage1', '/historicalgage1', 'gage1.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage Phase B","type":"historicalgage1","textRenderer":"historicalgage","tspan":"12H","conf":{"id":"newWidget","value":"abc","min":"0","max":"300","title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" "}}]'),
(16, 'v3', 'HistoricalGage2', '/historicalgage2', 'gage2.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"historicalgage2","textRenderer":"historicalgage","tspan":"12H","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","donut":true}}]'),
(17, 'v3', 'HistoricalGage3', '/historicalgage3', 'gage3.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"historicalgage3","textRenderer":"historicalgage","tspan":"12H","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":"0.1","titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","pointer":true}}]'),
(18, 'v3', 'HistoricalGage4', '/historicalgage4', 'gage4.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"historicalgage4","textRenderer":"historicalgage","tspan":"12H","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","pointer":true,"pointerOptions":{"toplength":"-15","bottomlength":"30","bottomwidth":"12","color":"#8080c0","stroke":"#8080c0","stroke_width":"3"}}}]'),
(19, 'v3', 'HistoricalGage5', '/historicalgage5', 'gage5.png', '[{"w_id":"1","x":"1","y":"1","width":"4","height":"3","tagname":"384 Voltage PhaseB","type":"historicalgage5","textRenderer":"historicalgage","tspan":"12H","conf":{"id":"newWidget","value":"abc","min":0,"max":300,"title":"Widget Title","decimals":"2","label":"Parameter","gaugeWidthScale":0.1,"titleFontColor":"#000000","titleFontFamily":"Times New Roman","valueFontColor":"#ff0000","valueFontFamily":"Times New Roman","symbol":" ","donut":true,"pointer":true,"pointerOptions":{"toplength":"-15","bottomlength":"40","bottomwidth":"12","color":"#8080c0","stroke":"#8080c0","stroke_width":"3"}}}]'),
(20, 'v3', 'HistoricalValue', '/historicalValue', 'numericValue.png', '[{"w_id":"1","x":"1","y":"1","width":"8","height":"1","tagname":"384 Voltage Phase B", "type":"historicalValue","tspan":"12H","id":"newWidget","value":"none","FontColor":"#000000","FontSize":"20","FontWeight":"normal","FontFamily":"Times New Roman","symbol":"","digit":"2","background":"#f2f2f2","borderColor":"#f2f2f2","borderThickness":"1"}]'),
(21, 'v3', 'CylinderGage', '/cylinderGage', 'cylinderGage.png', '[{"w_id":1,"x":1,"y":1,"width":4,"height":4,"type":"cylinderGage","textRender":"historicalgage","tspan":"12H","conf":{"id":"newWidget","type":"serial","categoryField":"category","color":"#337ab7","depth3D":120,"angle":13,"autoMargins":true,"graphs":[{"balloonText":"[[title]] of [[category]]:[[value]]","type": "column","topRadius":1,"columnWidth": 1,"showOnAxis":false,"lineThickness":2, "lineAlpha": 0.5,"lineColor": "#d9edf7","labelText":"Water left in the barrel","fillColors": "#d9edf7","fillAlphas": 1,"valueField":"value1","id":"AmGraph-1"}],"valueAxes":[{"position":"left","title":"Value Range"}],"dataProvider":[{"category": "Water left in the barrel","value1":30}],"titles":[{"text":"Bar Chart","size":12}],"legend":{"enabled":true,"useGraphSettings":true},"categoryAxis":{"axisAlpha":0,"labelOffset":10,"gridAlpha":0,"gridPosition":"stop","title":"Machine"},"export":{"enabled":true}}}]'),
(22, 'v1', 'Status', '/status', 'status.png', '[{"w_id":"1","x":"1","y":"1","width":"8","height":"1","type":"status","id":"newWidget","FontColorLow":"#000000","FontColorHigh":"#ffffff","FontSize":"18","FontWeight":"normal","FontFamily":"Times New Roman","backgroundLow":"#dee1e6","backgroundHigh":"#000000","borderColorLow":"#dee1e6","borderColorHigh":"#000000","borderThickness":"1","textLow":"Offline","textHigh":"Online","tagname":"PLC Twix_Run_Time"}]'),
(23, 'v1', 'AlarmConf', '/alarmConf', 'alarmConf.png', '[{"w_id":"1","x":"1","y":"1","width":"9","height":"3","type":"alarmConf","id":"newWidget","title":"Active Alarm Widget","tagname":"PLC Twix_Run_Time","color":"#8080c0","FontWeight":"normal","FontFamily":"Georgia","FontSize":12}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comlogo`
--
ALTER TABLE `comlogo`
 ADD PRIMARY KEY (`ip`);

--
-- Indexes for table `dashboards`
--
ALTER TABLE `dashboards`
 ADD UNIQUE KEY `sno` (`sno`);

--
-- Indexes for table `emailcon`
--
ALTER TABLE `emailcon`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
 ADD PRIMARY KEY (`SNo`);

--
-- Indexes for table `EmpScreen`
--
ALTER TABLE `EmpScreen`
 ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `eventEmail`
--
ALTER TABLE `eventEmail`
 ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `getipsytem`
--
ALTER TABLE `getipsytem`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Machine`
--
ALTER TABLE `Machine`
 ADD PRIMARY KEY (`SNo`);

--
-- Indexes for table `MemoryTag`
--
ALTER TABLE `MemoryTag`
 ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `mqttclient`
--
ALTER TABLE `mqttclient`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mqttcon`
--
ALTER TABLE `mqttcon`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mqttserver`
--
ALTER TABLE `mqttserver`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `multipage`
--
ALTER TABLE `multipage`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polls`
--
ALTER TABLE `polls`
 ADD UNIQUE KEY `serial` (`poll_id`);

--
-- Indexes for table `Racipes`
--
ALTER TABLE `Racipes`
 ADD PRIMARY KEY (`SNo`);

--
-- Indexes for table `screens`
--
ALTER TABLE `screens`
 ADD PRIMARY KEY (`sno`);

--
-- Indexes for table `sendemail`
--
ALTER TABLE `sendemail`
 ADD PRIMARY KEY (`mailId`);

--
-- Indexes for table `sendFTP`
--
ALTER TABLE `sendFTP`
 ADD PRIMARY KEY (`ftpid`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
 ADD UNIQUE KEY `serial` (`serial`);

--
-- Indexes for table `shiftData`
--
ALTER TABLE `shiftData`
 ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `showftp`
--
ALTER TABLE `showftp`
 ADD PRIMARY KEY (`showid`);

--
-- Indexes for table `tblVersion`
--
ALTER TABLE `tblVersion`
 ADD PRIMARY KEY (`Sno`);

--
-- Indexes for table `tcpsettings`
--
ALTER TABLE `tcpsettings`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `ID` (`ID`), ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `VirtualTag1`
--
ALTER TABLE `VirtualTag1`
 ADD PRIMARY KEY (`VtagId`);

--
-- Indexes for table `widget`
--
ALTER TABLE `widget`
 ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comlogo`
--
ALTER TABLE `comlogo`
MODIFY `ip` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `dashboards`
--
ALTER TABLE `dashboards`
MODIFY `sno` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `emailcon`
--
ALTER TABLE `emailcon`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
MODIFY `SNo` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `EmpScreen`
--
ALTER TABLE `EmpScreen`
MODIFY `Sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `eventEmail`
--
ALTER TABLE `eventEmail`
MODIFY `Sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `getipsytem`
--
ALTER TABLE `getipsytem`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Machine`
--
ALTER TABLE `Machine`
MODIFY `SNo` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `MemoryTag`
--
ALTER TABLE `MemoryTag`
MODIFY `Sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `mqttclient`
--
ALTER TABLE `mqttclient`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `mqttcon`
--
ALTER TABLE `mqttcon`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mqttserver`
--
ALTER TABLE `mqttserver`
MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `multipage`
--
ALTER TABLE `multipage`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `polls`
--
ALTER TABLE `polls`
MODIFY `poll_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `Racipes`
--
ALTER TABLE `Racipes`
MODIFY `SNo` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `screens`
--
ALTER TABLE `screens`
MODIFY `sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=94;
--
-- AUTO_INCREMENT for table `sendemail`
--
ALTER TABLE `sendemail`
MODIFY `mailId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sendFTP`
--
ALTER TABLE `sendFTP`
MODIFY `ftpid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
MODIFY `serial` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `shiftData`
--
ALTER TABLE `shiftData`
MODIFY `Sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `showftp`
--
ALTER TABLE `showftp`
MODIFY `showid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblVersion`
--
ALTER TABLE `tblVersion`
MODIFY `Sno` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tcpsettings`
--
ALTER TABLE `tcpsettings`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `VirtualTag1`
--
ALTER TABLE `VirtualTag1`
MODIFY `VtagId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `widget`
--
ALTER TABLE `widget`
MODIFY `sno` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
