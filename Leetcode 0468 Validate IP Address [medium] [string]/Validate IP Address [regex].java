import java.util.regex.*;

class Solution {
    public String validIPAddress(String IP) {
        String regexIpv4 = "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
        Pattern patternIpv4 = Pattern.compile(regexIpv4);
        
        String regexIpv6 = "((([0-9a-fA-F]){1,4})\\:){7}(([0-9a-fA-F]){1,4})";
        Pattern patternIpv6 = Pattern.compile(regexIpv6);
        
        if (patternIpv4.matcher(IP).matches()) {
            return "IPv4";
        } else if (patternIpv6.matcher(IP).matches()) {
            return "IPv6";
        } else {
            return "Neither";
        }
    }
}